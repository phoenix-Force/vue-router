<template>
<ul class="nav justify-content-center">

    <router-link to="/" class ="nav-item nav-link" tag ="li" active-class="active" exact > <a>Home</a> </router-link>


    <router-link to="/user" class="nav-item nav-link" tag="li"> <a>User</a></router-link>

   <router-link to="/user-detail/50" class="nav-item nav-link" tag="li" ><a>User Details</a></router-link>
   <router-link to="/user-detail/60" class="nav-item nav-link" tag="li" ><a>User Details2</a></router-link>

   <router-link to="/user-edit" class="nav-item nav-link" tag="li" ><a>User Edit </a></router-link>

   <router-link to="/user-start" class="nav-item nav-link" tag="li" ><a> User Start</a></router-link>



</ul>
</template>
