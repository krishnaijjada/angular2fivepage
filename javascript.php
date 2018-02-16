<script>

var one = {
	name:"ONNNNNNNE",
	something: function(){
		
		console.log(this.name);
	}
	
	
	
};

var onemore = {
	 name:"John"
};

one.something.call(onemore);
</script>