<script>
	import { fly } from 'svelte/transition';

	let number = 0;
</script>

<div>
    <!-- Here we're using the key directive to apply a transition when an element changes value, 
        not just when it is entering or exiting the DOM
     -->

	<p>The number is:</p>
	{#key number} 
		<p  in:fly={{ y: -20 }}>
			{number}
		</p>
	{/key}
</div>
<br />
<button class="btn btn-primary" 
	on:click={() => {
        {number += 1;}
	}}>
	Increment
</button>