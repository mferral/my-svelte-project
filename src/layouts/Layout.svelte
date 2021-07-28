<script>
import { Link } from "svelte-navigator";  
import { useNavigate } from "svelte-navigator";
import { posts } from "../data/dataStore";
const navigate = useNavigate();  
</script>

<h1>Header</h1>
Svelte store { $posts }
<nav>
    <Link to="/">Home</Link>	
    <Link to="/admin">Child 1</Link>	
	<Link to="/admin/child">Child 2</Link>	
</nav>
    <slot />
<button on:click="{() => navigate('/')}">
	Go
</button>
<h1>Footer</h1>