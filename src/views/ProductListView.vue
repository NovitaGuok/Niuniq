<template>
    <div class="card p-4 border-0 shadow" style="border-radius: 8px;">
        <span class="text-success fw-bold d-flex align-items-center fs-2">Daftar Produk</span>
        <hr />
        <div class="d-flex justify-content-between">
            <div class="tab-wrap w-50 position-relative d-flex">
                <input type="radio" name="tabs" id="tab1" checked>
                <div class="tab-label-content" id="tab1-content">
                    <label class="tab" for="tab1">Semua</label>
                    <div class="tab-content">TAB 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        laoreet
                        eget lectus eu congue. Nam finibus urna eget nisl aliquam, in dictum ligula feugiat. Donec
                        mollis
                        ligula purus, et interdum velit bibendum eget. Aliquam magna diam, tristique eu libero nec,
                        sagittis
                        finibus sapien. Cras a ex ultricies, faucibus elit sagittis, maximus nisi. Donec quis arcu
                        sapien.
                        Aenean risus nibh, varius sed porttitor a, ornare nec leo. Sed vitae lacus in ipsum varius
                        sagittis.
                        Ut in quam cursus, ullamcorper sapien posuere, laoreet elit. Suspendisse interdum, risus ut
                        ultricies scelerisque, nibh est commodo leo, sed tristique nisl odio et turpis. Fusce
                        pellentesque
                        nunc nec arcu feugiat accumsan. Praesent mauris sem, eleifend sit amet tortor in, cursus
                        vehicula
                        arcu. Curabitur convallis sit amet nunc ac feugiat. Sed at risus id diam porta pretium id vel
                        felis.
                        Donec nec dui id nisl hendrerit laoreet eu id odio.</div>
                </div>

                <input type="radio" name="tabs" id="tab2">
                <div class="tab-label-content" id="tab2-content">
                    <label class="tab" for="tab2">Menunggu</label>
                    <div class="tab-content">TAB 2 - Quisque egestas, purus in tempor vulputate, diam augue mollis quam,
                        quis elementum ipsum ex a risus. Quisque sed augue porta, facilisis felis vitae, cursus mi.
                        Nullam
                        mollis magna eget tincidunt mollis. Sed suscipit placerat ultricies. Sed eget lorem et ipsum
                        ultricies congue eu a enim. Nam quis ex nec lorem dignissim suscipit eu ut felis. Vivamus
                        molestie
                        felis id purus congue, vel ultrices sem molestie.</div>
                </div>

                <input type="radio" name="tabs" id="tab3">
                <div class="tab-label-content" id="tab3-content">
                    <label class="tab" for="tab3">Gagal</label>
                    <div class="tab-content">TAB 3 - Donec vulputate ante ac ligula vestibulum, id mollis diam commodo.
                        Integer at consequat magna. Sed elit sem, dictum nec porttitor ac, ultrices id enim. Morbi
                        semper
                        eros a enim malesuada, eu finibus erat dictum. Ut vitae orci a odio sagittis malesuada. Cras
                        volutpat vel lorem in tempor. Duis ultricies lectus sit amet tellus vehicula faucibus. Etiam sed
                        leo
                        ac erat tempor feugiat at quis ipsum. Mauris pellentesque nisl lorem, ac finibus sapien sagittis
                        vel. Donec et lobortis est. Vestibulum dignissim ligula nec erat interdum, quis sollicitudin
                        metus
                        pretium. Vestibulum quis dui sapien. Proin commodo justo ac orci elementum molestie. Aliquam
                        mattis
                        orci vitae volutpat commodo.</div>
                </div>

                <input type="radio" name="tabs" id="tab4">
                <div class="tab-label-content" id="tab4-content">
                    <label class="tab" for="tab4">Selesai</label>
                    <div class="tab-content">TAB 4 - Quisque egestas, purus in tempor vulputate, diam augue mollis quam,
                        quis elementum ipsum ex a risus. Quisque sed augue porta, facilisis felis vitae, cursus mi.
                        Nullam
                        mollis magna eget tincidunt mollis. Sed suscipit placerat ultricies. Sed eget lorem et ipsum
                        ultricies congue eu a enim. Nam quis ex nec lorem dignissim suscipit eu ut felis. Vivamus
                        molestie
                        felis id purus congue, vel ultrices sem molestie.</div>
                </div>

                <div class="slide"></div>
            </div>
            <button type="button" class="btn btn-success text-white fw-bold">Tambah Produk</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductListView",
}
</script>

<style scoped lang="scss">
$aliceBlue: #e9f8ee;
$success: #28a745;
$muted: #b0b3bb;
$num-of-tabs: 4;

@mixin tabs {
    @for $i from 1 through $num-of-tabs {
        &:nth-of-type(#{$i}) {
            &:checked {
                ~.slide {
                    left: calc((100% / #{$num-of-tabs}) * #{$i - 1});
                }
            }
        }
    }
}

.tab-wrap {
    position: relative;

    &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 4px;
        z-index: 1;
        background-color: $muted;
        bottom: 0;
    }
}

input[type="radio"][name="tabs"] {
    position: absolute;
    z-index: -1;

    &:checked {
        +.tab-label-content {
            .tab {
                background: $aliceBlue !important;
            }

            label {
                color: $success;
            }

            .tab-content {
                display: block;
            }
        }
    }

    @include tabs;

    &:first-of-type {
        &:checked {
            ~.slide {
                left: 0;
            }
        }
    }
}

label {
    cursor: pointer;
    color: $muted;
    background-color: white;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 56px;
    transition: color 0.2s ease;
    width: 100%;
}

.slide {
    background: $success;
    width: calc(100% / #{$num-of-tabs});
    height: 4px;
    position: absolute;
    left: 0;
    top: calc(100% - 4px);
    transition: left 0.3s ease-out;
    z-index: 2;
}

.tab-label-content {
    width: 100%;

    .tab-content {
        position: absolute;
        top: 100px;
        left: 16px;
        line-height: 130%;
        display: none;
    }
}

@media screen and (max-width: 800px) {
    h1 {
        padding: 40px 0 90px 10%;
    }

    .tab-wrap {
        width: 80%;
        margin-left: 10%;
        top: -106px;
    }
}

.follow {
    width: 42px;
    height: 42px;
    border-radius: 50px;
    background: #03A9F4;
    display: block;
    margin: 300px auto 0;
    white-space: nowrap;
    padding: 13px;
    box-sizing: border-box;
    color: $muted;
    transition: all 0.2s ease;
    font-family: Roboto, sans-serif;
    text-decoration: none;
    box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.2);

    i {
        margin-right: 20px;
        transition: margin-right 0.2s ease;
    }

    &:hover {
        width: 134px;

        i {
            margin-right: 10px;
        }
    }
}

@media screen and (max-width: 800px) {
    .follow {
        margin: 400px auto 0;
    }
}
</style>