
const menuList=[
    {
        title:'首页',
        key:'/home',
    },
    {
        title:'商品',
        key:'goods',
        children:[
            {
                title:'品类管理',
                key:'/category',
            },
            {
                title:'商品管理',
                key:'/product',
            },
        ]
    },
    {
        title:'用户管理',
        key:'/user',
    },
    {
        title:'角色管理',
        key:'/role',
    },
    {
        title:'图表',
        key:'chars',
        children:[
            {
                title:'柱状图',
                key:'/charts/bar',
            },
            {
                title:'折线图',
                key:'/charts/line',
            },
            {
                title:'饼图',
                key:'/charts/pie',
            },
        ]
    },
]

export default menuList
