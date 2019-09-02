let App = angular.module('App',[]);
App.directive('navBar',function(){
    return{
        template: ` <nav class="navbar navbar-expand-lg navbar-light bg-light top-nav">
             <a class="navbar-brand" href="#">
                 <img src="https://images.vexels.com/media/users/3/157257/isolated/preview/d3bd73477873ff05a127e686ee688f65-black-and-white-house-icon-by-vexels.png"
                     alt="Logo" style="width:40px;">
             </a>
             <a class="navbar-brand" href="index.html">Triliio</a>
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
             </button>

             <div class="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul class="navbar-nav mr-auto">
                     <li class="nav-item">
                         <a class="nav-link" href="sell.html">Sell</a>
                     </li>
                     <li class="nav-item">
                         <a class="nav-link" href="main.html">Buy</a>
                     </li>
                     
                     <li class="nav-item">
                         <a class="nav-link" href="agents.html">Find An Agent</a>
                     </li>
                     <li class="nav-item">
                         <a class="nav-link" href="#">Home Loans</a>
                     </li>
                     <li class="nav-item">
                         <a class="nav-link" href="#">Services</a>
                     </li>
                    <li class="nav-item">
                         <a class="nav-link" href="about.html">About Us</a>
                    </li>
                 </ul>
    <div class = "right-items">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" data-toggle = "modal" 
        data-target = "#loginModal"
        >Log in</button>

        <span><button class="btn btn-success my-2 my-sm-0"style = "margin-left:10px;">Sign up</button></span>
                  
            </div>
        </div>
    </nav>
    <!-- The Modal -->
    <div class="modal fade" id="loginModal">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Welcome to Triliio</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <h5><strong>Log in</strong></h5>
                    <form>
                        <div class="form-group">
                            <label for="Email1">Email address</label>
                            <input type="email" class="form-control" id="Email1"
                                aria-describedby="emailHelp" placeholder="Enter email">
                           
                        </div>
                        <div class="form-group">
                            <label for="Password">Password</label>
                            <input type="password" class="form-control" id="Password"
                                placeholder="Password">
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="Check">
                            <label class="form-check-label" for="Check">Remember Me</label>
                        </div>
                        <button type="submit" class="btn btn-success">Log in</button>
                    </form>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>

`
    }
})

App.directive('footerNav',function(){
    return{
        template: `<footer>
     <div class="container">
         <div class="row">
             <div class="col-md-3 col-6">
                 <ul>
                     <h6><strong>REAL ESTATE</strong></h6>
                     <li>Browse all homes</li>
                     <li>Albuquerque real estate</li>
                     <li>Atlanta real estate</li>
                     <li>Austin real estate</li>
                     <li>Baltimore real estate</li>
                     <li><a href="#">More</a> </li>
                 </ul>
             </div>
             <div class="col-md-3 col-6">
                 <ul>
                     <li><strong>RENTALS</strong></li>
                     <li>Rental Buildings</li>
                     <li> Atlanta apartments for rent</li>
                     <li>Austin apartments for rent </li>
                     <li>Baltimore apartments for rent</li>
                     <li>Boston apartments for rent</li>
                     <li><a href="#">More</a> </li>
                 </ul>
             </div>
             <div class="col-md-3 col-6">
                 <ul>
                     <li><strong>MORTGAGE RATES</strong></li>
                     <li>Current mortgage rates</li>
                     <li>Alaska mortgage rates</li>
                     <li>Alabama mortgage rates</li>
                     <li>Arkansas mortgage rates</li>
                     <li>Arizona mortgage rates</li>
                     <li><a href="#">More</a> </li>
                 </ul>
             </div>
             <div class="col-md-3 col-6">
                 <ul>
                     <li><strong>BROWSE HOMES</strong></li>
                     <li>California</li>
                     <li>Texas</li>
                     <li>New York</li>
                     <li>Florida</li>
                     <li>Illinois</li>
                     <li><a href="#">More</a> </li>
                 </ul>
             </div>
         </div>
         <div class="footer-box text-center">
             <img src="https://images.vexels.com/media/users/3/157257/isolated/preview/d3bd73477873ff05a127e686ee688f65-black-and-white-house-icon-by-vexels.png"
                 id="logo">
             <span class="footer-txt">
                 Trillio
             </span>
             <p>Copyright © https://www.Trillio.com. All Rights Reserved</p>
         </div>
</footer>`
    }
})
App.directive('paginationBar',function(){
    return{
        template: `<nav aria-label="Page navigation"class = "pagination-bar">
    <ul class="pagination pagination-md justify-content-center pag-bar">
        <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
        </li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">4</a></li>
        <li class="page-item"><a class="page-link" href="#">5</a></li>
        <li class="page-item">
            <a class="page-link" href="#">Next</a>
        </li>
    </ul>
</nav>`
    }
})
