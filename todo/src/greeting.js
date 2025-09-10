// greeting.js
const homeContent = document.getElementById('content');

function home(){
    const h1 = document.createElement('h1');
    const paragraph = document.createElement('p');
    h1.textContent = 'Welcome to La Bella Cucina';
    paragraph.textContent = 'Experience authentic flavors crafted with passion. From sizzling steaks towood-fired pizzas, we bring the warmth of Italian dining right to your table.Join us for fresh ingredients, friendly service, and unforgettable evenings.'
    homeContent.append(h1,paragraph);


}



function menu(){
    const menu = [
    { title: "Grilled Ribeye Steak – $24.99", text: '12oz ribeye, garlic butter, served with roasted potatoes and seasonal vegetables.' },
    { title: "Margherita Pizza – $13.50", text: 'Stone-baked with fresh mozzarella, basil, and San Marzano tomatoes.' },
    { title: "Pan-Seared Salmon – $19.75", text: 'Served with lemon dill sauce, wild rice, and sautéed spinach.' },
    { title: "Tiramisu – $7.50", text: 'Classic Italian dessert layered with espresso-soaked ladyfingers and mascarpone cream' }
    ];

  
    
    for(index in menu ){
        const content = document.createElement('div');
        const h2 = document.createElement('h2');
        const paragraph = document.createElement('p');

        h2.textContent = menu[index].title;
        paragraph.textContent = menu[index].text;
       
        content.append(h2,paragraph);
        homeContent.appendChild(content);

    }
    
}

function contact(){
    const h1 = document.createElement('h1');
    const paragraph = document.createElement('p');
    h1.textContent = 'About Us';
    paragraph.textContent = 'At La Bella Cucina, we believe dining is more than just food — it’s an experience.Our journey began with a passion for traditional recipes, fresh ingredients,and the joy of bringing people together around the table.From our chefs to our servers, every member of our team is dedicated to creating moments you’ll remember long after your meal.'
    homeContent.append(h1,paragraph);
    
}
const navContainer = document.querySelector('.nav-container');
const navItems = navContainer.querySelectorAll('nav');


navItems.forEach((item) => {
    item.addEventListener('click',() =>{
        homeContent.innerHTML = '';
        if (item.textContent == 'Home'){
            home();
        }else if (item.textContent == 'Menu'){
            menu();
        }else{
            contact();
        }
    });
});