// app下面的方法用来处理数据
var app = {
	addItem:function(title){
		data.push({
			id:UUid(),
			title:title,
			isChecked:false
		});
		app.render();
	},
	clickItem:function(id){
		data.forEach(function(item, index){
			if(item.id === id){
				item.isChecked = !item.isChecked;
			}
		});
		app.render();
	},
	deleteItem:function(id){
		data.forEach(function(item, index){
			if(item.id === id){
				data.splice(index, 1);
			}
		});
		app.render();
	},
	allItem:function(isAll){
		data.forEach(function(item){
			item.isChecked = isAll;
		});
		app.render();
	}
}
