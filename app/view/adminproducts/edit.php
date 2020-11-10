<?php
  use Core\FormHelpers;
  $this->set_sitle('Edit '.$this->product->name);
  $this->start('head')?>
<?php
  $this->end();
  $this->start('body')?>
  <section class="row">
    <article class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
      <h2 class="text-center">Edit <?=$this->product->name?></h2>
      <form action="<?=$this->form_action?>" method="POST" enctype="multiipart/form-data">
        <?=FormHelpers::csrf_input()?>
        <section class="row">
          <?=FormHelpers::display_errors($this->display_errors)?>
          <input type="hidden" id="sorted-img" name="sorted-img" value="" />
          <?=FormHelpers::input_block('text','Product','name',$this->product->name,['class'=>'form-control'],['class'=>'col-sm-4 col-md-4 col-lg-4 offset-lg-2']);?>
          <?=FormHelpers::input_block('text','Tagline','tagline',$this->product->tagline,['class'=>'form-control'],['class'=>'col-sm-8 col-md-4 col-lg-4 offset-lg-2-2'])?>
          <?=FormHelpers::select_block('Brand', 'brand', $this->product->brand, $this->brands,['class'=>'form-control '],['class'=>'col-sm-4 col-md-4 col-lg-4 offset-lg-2']);?>
          <?=FormHelpers::input_block('number','RRP','rrp',$this->product->rrp,['class'=>'form-control'],['class'=>'col-sm-4 col-md-4 col-lg-4 offset-lg-2-2']);?>
          <?=FormHelpers::image_upload('Product Images','product_images',['class'=>'form-control'],['class'=>'col-sm-6 col-md-4 col-lg-4 offset-lg-2'])?>
          <?=$this->partial('adminproducts','edit_images')?>
          <?=FormHelpers::input_area('Description','description',$this->product->description,['class'=>'form-control'],['class'=>'col-sm-12 col-md-12 col-lg-8 offset-lg-2']);?>
          <div class="col-lg-8 offset-lg-2 text-right pt-4">
            <a href="<?=SROOT?>adminproducts/index" class="btn btn-md btn-dark">Back to products</a>
            <?=FormHelpers::submit_tag('Save',['class'=>'btn btn-md btn-success'])?>
          </div>
        </section>
      </form>
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
<?php $this->end()?>
