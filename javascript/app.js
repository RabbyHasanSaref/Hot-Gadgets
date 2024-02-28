const loadPhone = async (searchBar) => {
        const res = await  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchBar}`);
        const data = await res.json();
        const phone = data.data;
        loadPhoneShow(phone);
}

const loadPhoneShow = (phone) => {
    const productContaine = document.getElementById('product-container');

    // same product repiting stop ----------------
    productContaine.textContent = " ";

    // display multiplue product show button -----------
    const showBtn = document.getElementById('showbutton');
    if(phone.length > 10){
        showBtn.classList.remove('hidden');
    }
    else{
        showBtn.classList.add('hidden');
    }

    // display product show system --------------------
    phone = phone.slice(0, 6);

    phone.forEach(phones => {
        const productCard = document.createElement('div');
        productCard.classList = `card bg-base-100 shadow-xl my-5`;
        productCard.innerHTML = `
        <figure><img src="${phones.image}" alt="Shoes" /></figure>
            <div class="card-body space-y-2 items-center">
                <h2 class="card-title">${phones.phone_name}</h2>
                <p class="text-center">There are many variations of passages of available, but the majority have suffered</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary">Show Details</button>
                </div>
            </div>
        `
        productContaine.appendChild(productCard);
    });
}

// -------------------------------------------------------

const searchBtn = () => {
    const searchBar = document.getElementById('searchBar');
    const searchValue = searchBar.value;
    loadPhone(searchValue);

}


// loadPhone()