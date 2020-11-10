<?php
  $this->set_sitle('New Product');
  $this->start('body');?>
  <section class="row">
    <article class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
      <h2 class="text-center">New Product</h2>
      <?=$this->partial('adminproducts','form')?>
    </article>
  </section>
  <script>
    tinymce.init({
      selector: 'textarea',
      branding: false,
      plugins: 'advlist autolink lists link image charmap print preview hr anchor pagebreak',
      toolbar_mode: 'floating',
    });
  </script>

<?php $this->end();?>
