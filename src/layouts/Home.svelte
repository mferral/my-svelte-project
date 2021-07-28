<script>
import { Link } from "svelte-navigator";
import { posts, actionsPost } from "../data/dataStore";
import { onMount } from 'svelte';
let result = {
    status: 202
};
onMount(async () => {
    result = await actionsPost.get();
});
</script>

<h1>Home Produc</h1>
{result.status}
{$posts.isLoading}
<nav>
    <Link to="/">Home</Link>
    <Link to="admin">Admin</Link>
</nav>
<button on:click={()=> actionsPost.add({title: 'Custom'})}>Suma custom store Update</button>
<ul>
{#each $posts.list as post}
    <li>
        {post.title}
    </li>
{/each}
</ul>