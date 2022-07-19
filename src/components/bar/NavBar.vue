<template>
  <nav class="navbar navbar-expand-lg navbar-white bg-white">
    <div class="container-fluid ms-5 me-5">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse d-flex justify-content-between"
        id="navbarTogglerDemo01"
      >
        <a class="navbar-brand" href="#">
          <img
            src="@/assets/img/niuniq-logo.svg"
            alt=""
            class="d-inline-block align-text-top"
          />
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active text-black" aria-current="page" href="#"
              >Tentang</a
            >
          </li>
          <li class="nav-item me-3 ms-3">
            <img
              src="@/assets/img/notification.svg"
              alt=""
              class="d-inline-block align-text-top"
            />
          </li>
          <li class="nav-item">
            <img
              src="@/assets/img/avatar.svg"
              alt=""
              class="d-inline-block align-text-top"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>