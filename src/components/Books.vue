<template>
	<div class="container">
		<h1>ADD NEW BOOK</h1>
		<form method="POST" v-on:submit.prevent="addTicket">
			<div class="card">
				<div class="card-header" data-background-color="green">
					<p class="category">Add multiple books</p>
				</div>
				<div class="container">

					<div class="row" v-for="(book, index) in library" :key="index">
						<div class="col-md-4">
							<div class="form-group" style="margin-top:20px;">
								<label class="control-label">Date </label>
								<input type="date" class="form-control" v-model="book.date" required="">
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group" style="margin-top:20px;">
								<label class="control-label">Book Name</label>
								<input type="text" class="form-control" v-model="book.details" required="">
							</div>
						</div>
            <div class="col-md-2" style="margin-top:30px;">
              <button class="close" @click.prevent="library.splice(index, 1)">
             	<button type="submit" style="margin-top:20px;" class="btn btn-warning">X</button>
              </button>
            </div>
					</div>

					<a @click="addNewRow" style="color:red;">Add Another book</a>

				</div>
			</div>
      	<div class="clearfix"></div>
			<button type="submit" style="margin-top:20px;"  class="btn btn-info">SUBMIT</button>
		
		</form>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				library: [
					{
						date: null,
						details: null,

					},
				],
			};
		},
		methods: {
			addNewRow: function () {
				this.library.push({ date: null, details: null, });
			},
			addTicket() {
				var vm = this;
				axios({
					method: "post",
					url: "/request",
					data: {
						library: this.library,
					},
					headers: {

					}
				})
					.then(function (response) {
						console.log(response);
					})
					.catch(function (error) {
						console.log(error);
					});
			}
		}
	};
</script>