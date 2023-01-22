<template>
	<div >
            <h2>Nom : {{ contact.name }}</h2>
			<span>Numéro : {{ contact.number }}</span>
      <button>Call</button>
	</div>
</template>

<script>
export default{
    name : 'ajoutContact',
    props : [
        'contact'
    ]
}
</script>