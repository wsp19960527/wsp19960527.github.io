module.exports = {
	title:'相安无事',
	discription:'这是一个很懒的人',
	theme: 'reco',
	themeConfig: {
		mode: 'auto', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
		modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示
		subSidebar: 'auto',
		head: [
			['meta', {
				name: 'viewport',
				content: 'width=device-width,initial-scale=1,user-scalable=no'
			}]
		],
		type: 'blog',
		authorAvatar: '/img/avatar1.jpg',
		nav: [{
				text: '首页',
				link: '/'
			}, {
				text: 'js',
				link: '/views/js/'
			}, {
				text: 'css/html',
				link: '/views/css/'
			},
			{
				text: '时间轴',
				link: '/views/timeline/',
				icon: 'reco-date'
			}
		],
		sidebar:{
			'/views/css/':[
				'',
				'css',
				'html'
			]
		},
		
	}
}