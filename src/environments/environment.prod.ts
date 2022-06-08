export const environment = {
  production: true,

  // chbc
  wawewiwoowu: {
    customer_key: "ck_eb11372de50af82635fa5fa1fe456770b89cb8f2",
    customer_secret: "cs_4d8c7680513c22b72456118c5049c6c16030527a",   
  },

  // lns
  // wawewiwoowu: {
  //   customer_key: "ck_5930929364bb63333b5598a1fdbe7e51e2a66ec7",
  //   customer_secret: "cs_736ec4fd39ac36c0cf55a56f9972f269371bb304",   
  // },

  // pos
  pos: {
    // host: "http://heusc.prd:4474"
    host: "http://localhost:4474"
  },

  core: {
    host: "http://localhost:4700",
    dev: "http://localhost:4700",
    prod: "http://heusc.prd:4700",
    client: "http://heusc.prd:4706",
  }
};
