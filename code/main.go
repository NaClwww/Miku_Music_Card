package main

import (
	"bufio"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
	"math/rand"
	"net/http"
	"os"
	"strconv"
)

type Config struct {
	Server struct {
		Port int `yaml:"port"`
	} `yaml:"server"`
}

var config Config

func main() {
	Init()

	r := gin.Default()

	r.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	})

	r.LoadHTMLGlob("build/index.html")

	r.Static("/static", "./build/static")

	r.GET("/url", func(c *gin.Context) {
		url := getUrl()
		c.JSON(200, gin.H{"url": url})
	})

	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{})
	})
	fmt.Println("Starting server on port " + strconv.Itoa(config.Server.Port) + "\n")
	err := r.Run(":" + strconv.Itoa(config.Server.Port))
	if err != nil {
		return
	}
}

func getUrl() string {
	ids, _ := readIDsFromFile("MusicId.txt")
	//id := "2644193550"
	id := randomIDFromSlice(ids)
	url := "orpheus://song/" + id + "/?autoplay=1"
	return url
}

func randomIDFromSlice(ids []string) string {

	// 生成一个随机索引
	randomIndex := rand.Intn(len(ids))

	// 返回随机选中的 ID
	return ids[randomIndex]
}

func readIDsFromFile(filename string) ([]string, error) {
	// 打开文件
	file, err := os.Open(filename)
	if err != nil {
		return nil, err
	}
	defer func(file *os.File) {
		err := file.Close()
		if err != nil {

		}
	}(file)

	var ids []string
	scanner := bufio.NewScanner(file)

	// 逐行读取文件
	for scanner.Scan() {
		// 每行作为一个字符串 ID
		idStr := scanner.Text()
		// 将字符串 ID 添加到切片中
		ids = append(ids, idStr)
	}

	// 检查是否有读取错误
	if err := scanner.Err(); err != nil {
		return nil, err
	}

	return ids, nil
}

func Init() {
	viper.SetConfigFile("config.yaml")
	viper.SetConfigType("yaml")
	viper.AddConfigPath(".") // 指定查找配置文件的路径(相对路径)
	viper.SetDefault("server.port", 8000)
	err := viper.ReadInConfig() // 读取配置信息
	if err != nil {
		_ = viper.WriteConfig()
	}
	config.Server.Port = viper.GetInt("server.port")
}
