<script>
import Home from '../layouts/Home.svelte';
import Parent from '../layouts/Parent.svelte';
import Child1 from '../layouts/Child1.svelte';
import Child2 from '../layouts/Child2.svelte';
import Layout from '../layouts/Layout.svelte';
import { Router, Route } from "svelte-navigator";
let propiedad='Propo'
</script>

<div>
<Router>
    <Route path="/">
        <Home />
    </Route>
    <Route path="admin/*">
    <Layout>
        <Route path="/">
            <Parent />
        </Route>
        <Route path="child">
            <button on:click="{() => propiedad = 'Propiedad'}">Change Prop</button>
            <Child1 prop={propiedad} />
        </Route>
    </Layout>
    </Route>
</Router>
</div>