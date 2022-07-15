<template>
    <div class="card p-4 border-0 shadow" style="border-radius: 8px;">
        <div class="">
            <span class="text-success fw-bold d-flex align-items-center fs-2">Daftar Produk</span>
            <hr />
            <!-- <div class="btn-add-product-wrapper">
                <button type="button" class="btn-add-product btn btn-success text-white fw-bold">Tambah
                    Produk</button>
            </div> -->
            <div class="tab-data">
                <input id="tab1" type="radio" name="tabs" checked>
                <input id="tab2" type="radio" name="tabs">
                <input id="tab3" type="radio" name="tabs">
                <input id="tab4" type="radio" name="tabs">

                <div class="tab-wrapper d-flex align-items-start">
                    <label class="tab1" for="tab1">Semua</label>
                    <label class="tab2" for="tab2">Menunggu</label>
                    <label class="tab3" for="tab3">Gagal</label>
                    <label class="tab4" for="tab4">Selesai</label>
                </div>

                <section id="content1">
                    <table class="table table-bordered text-start">
                        <thead>
                            <tr class="align-middle">
                                <th scope="col">No</th>
                                <th scope="col">Nama Produk</th>
                                <th scope="col">Status Verifikasi</th>
                                <th scope="col">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="align-middle">
                                <td scope="row">1.</td>
                                <td>Bootstrap 4 CDN and Starter Template</td>
                                <td>
                                    <Status />
                                </td>
                                <td class="d-flex">
                                    <div class="btn-action-wrapper">
                                        <button type="button" class="btn-action-main btn btn-success">
                                            <img src="@/assets/img/ic-file-download.svg" alt=""
                                                class="d-inline-block align-text-top">
                                        </button>
                                    </div>
                                    <div class="btn-action-wrapper">
                                        <button type="button" class="btn-action btn btn-outline-success">
                                            <img src="@/assets/img/ic-edit-green.svg" alt=""
                                                class="d-inline-block align-text-top">
                                        </button>
                                    </div>
                                    <div class="btn-action-wrapper">
                                        <button type="button" class="btn-action btn btn-outline-success">
                                            <img src="@/assets/img/ic-delete-green.svg" alt=""
                                                class="d-inline-block align-text-top">
                                        </button>
                                    </div>
                                    <div class="btn-action-wrapper">
                                        <button type="button" class="btn-action btn btn-outline-success">
                                            <img src="@/assets/img/ic-eye-green.svg" alt=""
                                                class="d-inline-block align-text-top">
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="content2">
                    <p>
                        Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin ball
                        tip turducken. Pork belly meatball t-bone bresaola tail filet mignon kevin turkey ribeye
                        shank flank doner cow kielbasa shankle. Pig swine chicken hamburger, tenderloin turkey rump
                        ball tip sirloin frankfurter meatloaf boudin brisket ham hock. Hamburger venison brisket
                        tri-tip andouille pork belly ball tip short ribs biltong meatball chuck. Pork chop ribeye
                        tail short ribs, beef hamburger meatball kielbasa rump corned beef porchetta landjaeger
                        flank. Doner rump frankfurter meatball meatloaf, cow kevin pork pork loin venison fatback
                        spare ribs salami beef ribs.
                    </p>
                    <p>
                        Jerky jowl pork chop tongue, kielbasa shank venison. Capicola shank pig ribeye leberkas
                        filet mignon brisket beef kevin tenderloin porchetta. Capicola fatback venison shank
                        kielbasa, drumstick ribeye landjaeger beef kevin tail meatball pastrami prosciutto pancetta.
                        Tail kevin spare ribs ground round ham ham hock brisket shoulder. Corned beef tri-tip
                        leberkas flank sausage ham hock filet mignon beef ribs pancetta turkey.
                    </p>
                </section>

                <section id="content3">
                    <p>
                        Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone
                        sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket
                        meatloaf short ribs.
                    </p>
                    <p>
                        Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin
                        pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin
                        meatloaf swine ground round venison.
                    </p>
                </section>

                <section id="content4">
                    <p>
                        Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin ball
                        tip turducken. Pork belly meatball t-bone bresaola tail filet mignon kevin turkey ribeye
                        shank flank doner cow kielbasa shankle. Pig swine chicken hamburger, tenderloin turkey rump
                        ball tip sirloin frankfurter meatloaf boudin brisket ham hock. Hamburger venison brisket
                        tri-tip andouille pork belly ball tip short ribs biltong meatball chuck. Pork chop ribeye
                        tail short ribs, beef hamburger meatball kielbasa rump corned beef porchetta landjaeger
                        flank. Doner rump frankfurter meatball meatloaf, cow kevin pork pork loin venison fatback
                        spare ribs salami beef ribs.
                    </p>
                    <p>
                        Jerky jowl pork chop tongue, kielbasa shank venison. Capicola shank pig ribeye leberkas
                        filet mignon brisket beef kevin tenderloin porchetta. Capicola fatback venison shank
                        kielbasa, drumstick ribeye landjaeger beef kevin tail meatball pastrami prosciutto pancetta.
                        Tail kevin spare ribs ground round ham ham hock brisket shoulder. Corned beef tri-tip
                        leberkas flank sausage ham hock filet mignon beef ribs pancetta turkey.
                    </p>
                </section>

                <!-- Pagination -->
                <nav class="nav-pagination mt-5 p-0 d-flex justify-content-end" aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&lt;</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&gt;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import Status from '../components/status/VerificationStatus.vue'

export default {
    name: "ProductListView",
    components: {
        Status,
    }
}
</script>

<style scoped lang="scss">
section {
    display: none;
    padding: 20px 0 0;
}

input {
    display: none;
}

label {
    display: inline-block;
    padding: 10px 30px;
    font-weight: 600;
    text-align: center;
    color: #bbb;
    border-bottom: 4px solid #ddd;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

label:hover {
    color: #888;
    cursor: pointer;
}

input:checked+label {
    color: #555;
    border-bottom: 4px solid #4CAF50;
}

#tab1:checked~#content1,
#tab2:checked~#content2,
#tab3:checked~#content3,
#tab4:checked~#content4 {
    display: block;
}

#tab1:checked~.tab-wrapper>.tab1 {
    background-color: #e9f8ee;
    border-bottom: 4px solid #4CAF50;
    color: #4CAF50
}

#tab2:checked~.tab-wrapper>.tab2 {
    background-color: #e9f8ee;
    border-bottom: 4px solid #4CAF50;
    color: #4CAF50
}

#tab3:checked~.tab-wrapper>.tab3 {
    background-color: #e9f8ee;
    border-bottom: 4px solid #4CAF50;
    color: #4CAF50
}

#tab4:checked~.tab-wrapper>.tab4 {
    background-color: #e9f8ee;
    border-bottom: 4px solid #4CAF50;
    color: #4CAF50
}

.btn-add-product-wrapper {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    position: absolute;
}

.btn-add-product {
    height: 3rem;

}

.btn-action-wrapper {
    padding: 0.3rem;
}

.btn-action {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #4CAF50;
    background-color: transparent;
}

.btn-action-main {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #4CAF50;
}

.btn-action img {
    width: 1.5rem;
    color: #4CAF50;
}

.nav-pagination {

}

.page-link {
    color: #4CAF50;
}

@media screen and (max-width: 650px) {
    label {
        font-size: 0;
    }

    label:before {
        margin: 0;
        font-size: 18px;
    }
}

@media screen and (max-width: 400px) {
    label {
        padding: 15px;
    }
}
</style>