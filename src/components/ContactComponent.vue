<template>
	<section class="text-center" id="contact">
		<h3 class="mb-5">Quote NOW!</h3>

		<div class="row">
			<div class="col-lg-5">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.0424417966224!2d-80.3452291!3d25.8680805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bb736b1246af%3A0xe012e7ea4771dfe9!2s9010%20NW%20105th%20Way%2C%20Miami%2C%20FL%2033178%2C%20EE.%20UU.!5e0!3m2!1ses-419!2scl!4v1677860725593!5m2!1ses-419!2scl"
					class="h-100 w-100"
					style="border: 0"
					allowfullscreen=""
					loading="lazy"
				></iframe>
			</div>

			<div class="col-lg-7">
				<form
					action="https://mailthis.to/codenico"
					method="POST"
					encType="multipart/form-data"
					id="my-form"
				>
					<!-- 2 column grid layout with text inputs for the first and last names -->
					<div class="row mb-4">
						<div class="col">
							<div class="form-outline">
								<input
									type="text"
									id="form6Example1"
									class="form-control"
									name="name"
									required
								/>
								<label class="form-label" for="form6Example1">Name</label>
							</div>
						</div>
					</div>

					<!-- Text input -->
					<!--   <div class="form-outline mb-4">
    <input type="text" id="form6Example3" class="form-control" />
    <label class="form-label" for="form6Example3">Company name</label>
  </div> -->

					<!-- Text input -->
					<!--   <div class="form-outline mb-4">
    <input type="text" id="form6Example4" class="form-control" />
    <label class="form-label" for="form6Example4">Address</label>
  </div> -->

					<!-- Email input -->
					<div class="form-outline mb-4">
						<input
							type="email"
							id="form6Example5"
							class="form-control"
							name="_replyto"
							required
						/>
						<label class="form-label" for="form6Example5">Email</label>
					</div>

					<!-- Number input -->
					<div class="form-outline mb-4">
						<input
							type="number"
							id="form6Example6"
							class="form-control"
							name="Phone"
							required
						/>
						<label class="form-label" for="form6Example6">Phone number</label>
					</div>
					<div class="form-outline mb-4">
						<input
							type="number"
							id="form6Example6"
							class="form-control"
							name="Part Number"
						/>
						<label class="form-label" for="form6Example6">Part number</label>
					</div>
					<div class="form-outline mb-4">
						<input
							type="number"
							id="form6Example6"
							class="form-control"
							name="Quantity"
						/>
						<label class="form-label" for="form6Example6">Quantity</label>
					</div>

					<!-- Message input -->
					<div class="form-outline mb-4">
						<textarea
							class="form-control"
							id="form6Example7"
							rows="4"
							name="message"
							required
						></textarea>
						<label class="form-label" for="form6Example7"
							>Additional information</label
						>
					</div>

					<!-- Checkbox -->
					<!--  <div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
    <label class="form-check-label" for="form6Example8"> Create an account? </label>
  </div> -->

					<!-- Submit button -->
					<button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
					<input type="hidden" name="_confirmation" value="Thank you for getting in touch with CAS.<br> We will be in contact with you shortly.">
				</form>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "ContactComponent",
};
</script>

<style scoped>
section {
	width: 70vw;
	margin: auto;
	height: 50vh;
}
</style>
