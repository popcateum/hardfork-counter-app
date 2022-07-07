<script lang="ts">
  import { getBlockNumber } from '@/chain/network/popcateum'
  import { blockNumber } from '@/stores'
  import { onMount } from 'svelte'
  import { forkData } from '@/components/data/fork'

  onMount(async () => {
    await setBlocknumber()
    setInterval(async () => {
      await setBlocknumber()
    }, 5000)
  })

  const setBlocknumber = async () => {
    $blockNumber = await getBlockNumber()
  }
</script>

<div class="counter-wrap">
  <div class="content-wrap">
    {#each forkData as item}
      <div class="content">
        <div class="title"><span>{item.name.toUpperCase()}</span> HARDFORK</div>
        <div class="number">
          FORK BLOCK: <span>{item.forkBlock}</span>
        </div>
        {#if item.forkBlock - $blockNumber < 0}
          <div class="number">
            <span>FORK COMPLETE</span>
          </div>
        {:else}
          <div class="number">
            REMAIN BLOCK: <span>{item.forkBlock - $blockNumber}</span>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .counter-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: 80px; */
    font-size: 20px;
    font-weight: bold;
    .content {
      background: rgb(30, 50, 68);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px;
      margin: 30px;
      div {
        padding: 2px;
      }
    }
  }
  span {
    color: $primary-color;
  }
</style>
