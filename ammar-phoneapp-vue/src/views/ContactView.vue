<template>
  <div class="about">
    <h1>Contact</h1>
  </div>

	<div v-for="contact in contacts" :key="contact.name">
			<h2>Nom : {{ contact.name }}</h2>
			<span>Numéro : {{ contact.number }}</span>
      <button>Call</button>
	</div>

</template>

<script>

export default {
		name: 'App',
		computed: {
			contacts() {
				return this.$store.state.contacts
			}
		}
	}

</script>
