<script>
	import { fade, fly } from 'svelte/transition';
	import LocalTransitions from './LocalTransitions.svelte';
	import ValueUpdate from './ValueUpdate.svelte';
	import Todos from './todos.svelte';
	import Panable from './Panable.svelte';
	let visible = true;
	function handleClick() {visible = !visible}
	let visible2 = true;
	function handleClick2() {visible2 = !visible2}
	let visible3 = true;
	function handleClick5() {visible3 = !visible3}

// run: npm run dev
</script>

<div class="demos">

<h2>Basic Transition </h2>
<label>
	<button class="btn btn-primary" on:click={() => handleClick()}>
	Toggle
</label>


{#if visible}
	<p transition:fade>
		Fades in and out
	</p>
{/if}

<hr>

<!-- passing in parameters  -->
<h2>Passing in transition parameters </h2>

<label>
	<button class="btn btn-primary" on:click={() => handleClick2()}>
	Toggle
</label>

{#if visible2}

<p transition:fly="{{ y: 200, duration: 2000 }}">
	Flies in and out
</p>
{/if}
<hr>

<h2>In and Out Directive</h2>

<label>
	<button class="btn btn-primary" on:click={() => handleClick5()}>
	Toggle
</button>

{#if visible3}

<p in:fly="{{ y: 200, duration: 2000 }}" out:fade>
	Flies in fades out
</p>
{/if}
<hr>
<h2>Local Transitions</h2>
	<LocalTransitions />
<hr>

<h2>Transitions on value update </h2>
	<ValueUpdate />
<hr>
<h2>Actions </h2>
	<Panable />
<hr>

<h2>Todo List </h2>
	<Todos />
<hr>


</div>