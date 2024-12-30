export default function handler(req, res) {
    const products = [
      {
        id: 1,
        title: "Cheese Burger",
        price: 10,
        image: "https://as1.ftcdn.net/jpg/05/91/90/82/1000_F_591908206_ibXQDVOpjlIjtjTXz6mYKr7LjYIHp2ZC.webp"
      },
      {
        id: 2,
        title: "French Burger",
        price: 12,
        image: "https://as1.ftcdn.net/v2/jpg/08/69/28/64/1000_F_869286447_p871VtuHesduDaO3ZqfxxKVSQZM6ub3i.jpg"
      },
      {
        id: 3,
        title: "Veggie Burger",
        price: 8,
        image: "https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-6-1024x1536.jpg"
      },
      {
        id: 4,
        title: "BBQ Burger",
        price: 15,
        image: "https://bsstatic2.mrjack.es/wp-content/uploads/2020/09/hamburguesa-bbq-cab.jpg"
      },
      {
        id: 5,
        title: "Spicy Chicken Burger",
        price: 14,
        image: "https://media.istockphoto.com/id/521207406/photo/southern-country-fried-chicken-sandwich.jpg?s=1024x1024&w=is&k=20&c=-4EO_SnfdAwoLfPeQjQApOPyBBeSXRmmbPpOUgnuTVE="
      },
      {
        id: 6,
        title: "Double Bacon Burger",
        price: 18,
        image: "https://media.gettyimages.com/id/117150229/photo/double-bacon-cheeseburger.jpg?s=612x612&w=gi&k=20&c=2k-IYSj6-daoKPIJDgNUasOsMxH4hpYWy57Z44jcWds="
      },
      {
        id: 7,
        title: "Chicken Supreme Burger",
        price: 16,
        image: "https://www.shutterstock.com/shutterstock/photos/2476088505/display_1500/stock-photo-classic-tasty-burger-on-a-wooden-tablet-burger-menu-junk-fast-food-french-fries-and-the-burger-2476088505.jpg"
      },
      {
        id: 8,
        title: "Fish Burger",
        price: 13,
        image: "https://www.unileverfoodsolutions.com.au/dam/global-ufs/mcos/ANZ/calcmenu/recipes/AU-recipes/fish-&-other-seafood-dishes/crispy-fish-burger-with-jalapeno-tartare-sauce/main-header.jpg"
      }
    ];
  
    res.status(200).json({ products });
  }
  