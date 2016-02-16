<!DOCTYPE html>
<html>
<head>
<title><%= title %></title>
<link rel="stylesheet" href= "https://fonts.googleapis.com/icon?family=Material+Icons" >
<link rel="stylesheet" href= "https://code.getmdl.io/1.1.1/material.indigo-pink.min.css" >

<script defer src= "https://code.getmdl.io/1.1.1/material.min.js" > </script>
< script src= "/javascripts/jquery-2.2.0.min.js" > </script>
< script src= "/javascripts/bootstrap.min.js" > </script>
< /head>
< body >

<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="custom-header mdl-layout__header mdl-layout__header--waterfall">
        <div class="mdl-layout__header-row">
            <span class="mdl-layout-title">Brandon Himpfen</span>
            <div class="mdl-layout-spacer"></div>
            <nav class="mdl-navigation mdl-layout--large-screen-only">
                <a class="mdl-navigation__link" href="">Link</a>
                <a class="mdl-navigation__link" href="">Link</a>
                <a class="mdl-navigation__link" href="">Link</a>
                <a class="mdl-navigation__link" href="">Link</a>
            </nav>
        </div>
    </header>
    <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Sidebar Menu</span>
        <nav class="mdl-navigation">
            <a class="mdl-navigation__link" href="/" title= "Home" > Father < /a>
            <a class="mdl-navigation__link" href="/mother" title= "mother" > Mother < /a>
            <a class="mdl-navigation__link" href="/nik" title= "nik" > Antanik < /a>
        </nav>
    </div>
    <main class="mdl-layout__content">
        <div class="page-content"><!-- Your content goes here --></div>
    </main>
</div>










