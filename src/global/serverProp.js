export async function getServerSideProps123(context) {
  const res = await fetch(
    `https://meta.omnismart.mn/api/method/moni_store.api.get_all_webitems?list_param={"fields": ["name", "description","image"], "filters":"{'creation': ['<', '2022-04-28']}"}`,
    //   { mode: "no-cors" },
    //   "https://alpha.moni.mn/api/method/ping",
    {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const dummy = await res.json();
  const data = dummy.message;

  return {
    props: { newProductItem: data }, // will be passed to the page component as props
  };
}
