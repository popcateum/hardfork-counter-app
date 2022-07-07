<script>
  import { blockNumber } from '@/stores'
</script>

<div class="img-wrap">
  <img src="/images/popcat.gif" alt="popcat" />
</div>

<div class="title-wrap">
  <div class="title">
    POPCATEUM <span>HARDFORK</span>
  </div>
  <div class="number">
    BLOCK NUMBER: <span>{$blockNumber}</span>
  </div>
</div>

<style lang="scss">
  .img-wrap {
    display: flex;
    justify-content: center;
    padding: 80px;
    img {
      width: 300px;
    }
  }
  .title-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .title {
    font-size: 80px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    margin-bottom: 2rem;
  }
  .number {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    text-align: center;
  }
  span {
    color: $primary-color;
  }
  @media screen and (max-width: 768px) {
    .title {
      font-size: 40px;
      font-weight: bold;
      color: #fff;
      text-align: center;
      margin-bottom: 2rem;
    }
    .number {
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      text-align: center;
    }
  }
</style>
