const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot547vl/",
            name: "springboot547vl",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot547vl/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网上订餐系统"
        } 
    }
}
export default base
