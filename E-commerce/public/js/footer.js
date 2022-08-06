const creatFooter = ()=>{
    let footer = document.querySelector('footer')

    footer.innerHTML =`
    <div class="footer-content">
            <img src="img/light-logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">About company</p>
         <p class="info">Lorem ipsum dolor sit, amet consectetur adipisicing 
            elit. Suscipit fugit, amet id debitis sint necessitatibus ducimus. 
            Nam aperiam nihil ullam, earum rerum expedita provident eum nesciunt 
            eligendi sunt ex ipsum doloribus iusto delectus repellat consequuntur esse. Perspiciatis, laboriosam nihil quae omnis quas doloribus harum expedita voluptate, 
            asperiores a provident praesentium quis facilis nemo non, minus accusamus iste fuga 
            totam labore officia eius! Ullam est animi itaque fugiat impedit autem maxime vel odio necessitatibus, 
            inventore nam debitis adipisci cum ad explicabo voluptates qui consequatur temporibus eveniet quasi 
            fuga repellendus vero in. Similique placeat deleniti delectus alias aliquam sed, cum quae nulla.</p>
            <p class="info">support emails - help@clothing.com, 
            customersupport@clothing.com</p>
            <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
            <div class="footer-social-container">
                <div>
                    <a href="#" class="social-link">terms & services</a>
                    <a href="#" class="social-link">privacy page</a>
                </div>
                <div>
                    <a href="#" class="social-link">instagram</a>
                    <a href="#" class="social-link">facebook</a>
                    <a href="#" class="social-link">twitter</a>
                </div>
            </div>
            <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

creatFooter();