// rest api data load
const loadPhone = async (searchBar= 13, isShowAll) => {
        const res = await  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchBar}`);
        const data = await res.json();
        const phone = data.data;
        loadPhoneShow(phone, isShowAll);
}

const loadPhoneShow = (phone, isShowAll) => {
    const productContaine = document.getElementById('product-container');

    // same product repiting stop ----------------
    productContaine.textContent = " ";

    // display multiplue product show button -----------
    const showBtn = document.getElementById('showbutton');
    if(phone.length > 10 && !isShowAll){
        showBtn.classList.remove('hidden');
    }
    else{
        showBtn.classList.add('hidden');
    }

    // display product show system --------------------
    if(!isShowAll){
        phone = phone.slice(0, 6);
    }

    // product data load and display show
    phone.forEach(phones => {
        const productCard = document.createElement('div');
        productCard.classList = `card bg-base-100 shadow-xl my-5`;
        productCard.innerHTML = `
        <figure><img src="${phones.image}" alt="Shoes" /></figure>
            <div class="card-body space-y-2 items-center">
                <h2 class="card-title">${phones.phone_name}</h2>
                <p class="text-center">There are many variations of passages of available, but the majority have suffered</p>
                <div class="card-actions justify-center">
                    <button onclick="showModals('${phones.slug}'); my_modal_1.showModal() "class="btn btn-primary">Show Details</button>
                </div>
            </div>
        `
        productContaine.appendChild(productCard);
    });

    // loader data fuction call 
    toggole(false);
}


// -------------------------------------------------------


// search button 
const searchBtn = (isShowAll) => {
    // loader Data function call
    toggole(true);


    const searchBar = document.getElementById('searchBar');
    const searchValue = searchBar.value;
    loadPhone(searchValue, isShowAll);
}

// loader data
const toggole = (istoggole) => {
    const spanerContainer = document.getElementById('spinnercontainer');
   if(istoggole){
    spanerContainer.classList.remove('hidden');
   }
   else{
    spanerContainer.classList.add('hidden');
   }
}

// show modal 
const showModals = async (id) => {
    console.log('Hello World', id)

    // modal data load api 
        const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
        const modal = await res.json();
        const result = modal.data;
        modalDataShow(result)
}

const modalDataShow = (result) => {
    console.log(result)
    const phoneName = document.getElementById('phon-name');
    phoneName.innerText = result.name;

    const imag = document.getElementById('images');
    imag.innerHTML = `
    <img id="img" src="${result.image}" alt="">
    `
    const Barnd = document.getElementById('barnd');
    Barnd.innerText = result.brand;

    const storeg = document.getElementById('storeg');
    storeg.innerText = result.mainFeatures.storage;
    
    const display = document.getElementById('displaysize');
    display.innerText = result.mainFeatures.displaySize;

    const chip = document.getElementById('chip');
    chip.innerText = result.mainFeatures.chipSet;

    const rams = document.getElementById('ram');
    rams.innerText = result.mainFeatures.memory;

    const title = document.getElementById('title');
    title.innerText = result.slug;

    const release = document.getElementById('release');
    release.innerText = result.releaseDate;

    const gps = document.getElementById('gps');
    gps.innerText = result.others.GPS;
}


// show all button
const showAll = () => {
    searchBtn(true)
}

loadPhone()