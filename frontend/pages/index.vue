<template>
    <h1>
        Home
    </h1>

</template>

<script lang="ts" setup>

const query = gql`
  query posts {
    posts {
      id
      title
    }
  }
`
const variables = { limit: 5 }

const {data} = await useAsyncQuery(query, variables)
console.log(data.value)
</script>
