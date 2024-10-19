import Link from "next/link";
export default function Home() {
  return (
  <div className="parentContainer">


  <div className="blog bounce-in-right">
    <div className="imageContainer">
      <img src="https://www.seannaskitchen.com/wp-content/uploads/2021/11/Alfredo-Hero.jpg" ></img>
    </div>
    <h1 className="title"><b>Pasta</b></h1>
    <p className="description">
    Pasta, a staple of Italian cuisine, is a versatile and beloved dish enjoyed worldwide. Made from durum wheat semolina or flour mixed...
    </p>
    <button className="buttonCont">
      <Link href="/blog1">Read more</Link></button>
  </div>


  <div className="blog bounce-in-right">
  <div className="imageContainer">
  <img src="https://cdn.pixabay.com/photo/2024/04/26/12/24/ai-generated-8721771_1280.jpg" ></img>
  </div>
    <h1 className="title"><b>Steak</b></h1>
    <p className="description">A STEAK is a rich, succulent cut of beef that’s loved for its bold flavors and tender texture. Typically sourced from premium cuts...</p>
    <button className="buttonCont">
      <Link href="/blog2">Read more</Link></button>
  </div>


  <div className="blog bounce-in-right">
  <div className="imageContainer">
  <img src="https://imgcdn.stablediffusionweb.com/2024/3/11/04a602b4-2b30-41d5-8ac5-109717914239.jpg" ></img>
  </div>
      <h1 className="title"><b>Sushi</b></h1>
      <p className="description">
      Sushi is a delightful and flavorful dish that follows Islamic dietary laws, ensuring the ingredients are permissible...
      </p>
    <button className="buttonCont">
      <Link href="/blog3">Read more</Link></button>
  </div>


   <div className="blog bounce-in-right">
   <div className="imageContainer">
   <img src="https://i.pinimg.com/736x/e8/35/ed/e835ed89023c2a6d2d1933321d59efc4.jpg" ></img>
   </div>
    <h1 className="title"><b>Momo</b></h1>
    <p className="description">Momo is a popular South Asian dumpling, beloved for its delicious filling and tender, steamed or fried dough...</p>
    <button className="buttonCont">
      <Link href="/blog4">Read more</Link></button>
    
    </div>

    <div className="blog bounce-in-right">
    <div className="imageContainer">
    <img src="https://www.ohmyveg.co.uk/wp-content/uploads/2023/06/Wontons-1-1-scaled-e1722868327285-720x720.jpg" ></img>
    </div>
      <h1 className="title"><b>Wontons</b></h1>
      <p className="description">Wontons are a type of Chinese dumpling that are typically filled with a savory mixture of minced meat, such as...</p>
      <button className="buttonCont">
        <Link href="/blog5">Read more</Link></button>
    </div>

    <div className="blog bounce-in-right">
    <div className="imageContainer">
    <img src="https://kirbiecravings.com/wp-content/uploads/2017/09/ramen-eggs-13a-700x789.jpg" ></img>
    </div>
      <h1 className="title"><b>Ramen</b></h1>
      <p className="description">Ramen is a beloved Japanese dish consisting of noodles served in a flavorful, often rich broth. The dish has become...</p>
      <button className="buttonCont">
        <Link href="/blog6">Read more</Link></button>
    </div>
  </div>
  );
}
