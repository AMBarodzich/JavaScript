methods.MKCOL = function(path){
	return inspectPath(path).then(function(stats){
    	if(!stats){
        	fs.mkdir(path).then(function(){
            	return {code:204,body:"is created"};
            })
        }
         else if(stats.isDirectory()){
         	return false;   
         }
         else if(stats.isFile()){
         	return {code:400,body:"bad request"}
         }
    })

}