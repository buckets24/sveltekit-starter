<main>
  <div class="w-screen py-6 md:h-screen bg-bodyBG">
    <div class="h-full flex flex-col-reverse justify-center lg:flex-row items-center">
      <div class="px-3">
        <div class="p-5 md:p-10 md:py-10 flex flex-col-reverse md:flex-row gap-8 rounded-[50px] mx-auto bg-white">
          <slot />
          <!-- <div class="flex-3">
            <div class="pb-6">
              <slot name="title"></slot>
            </div>
            <slot name="feature"></slot>
            <div class="flex border-t border-ink500 flex-1 flex-col items-center py-6 mt-6">
              <slot name="cta"></slot>
            </div>
          </div> -->
          <div class="flex-0 rounded-[50px] bg-primary flex items-center justify-center overflow-hidden">
            <img src="/img/devxpress.png" alt="DevXpress" />
          </div>
        </div>
      </div>
    </div>
  </div>
</main>