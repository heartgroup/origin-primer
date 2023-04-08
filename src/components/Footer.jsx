import { GridPattern } from '@/components/GridPattern'

export function Footer() {
  return (
    <footer className="relative pt-5 pb-20 sm:pb-32 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-32 text-zinc-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
      <div className="relative text-center text-sm text-zinc-600">
        <p>&copy; {new Date().getFullYear()} Origin Investigations Inc. All Rights Reserved.</p>
        <p><a href="#terms-of-use">Terms of Use</a> | <a href="#privacy-policy">Privacy Policy</a> | <a href="#data-security">Data Security</a>
        </p>
<button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onclick="toggleModal('modal-id')">
  Open regular modal
</button>
<div class="hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center" id="modal-id">
  <div class="relative w-auto my-6 mx-auto max-w-3xl">

    <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

      <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
        <h3 class="text-3xl font-semibold">
          Modal Title
        </h3>
        <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onclick="toggleModal('modal-id')">
          <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
            ×
          </span>
        </button>
      </div>

      <div class="relative p-6 flex-auto">
        <p class="my-4 text-slate-500 text-lg leading-relaxed">
          I always felt like I could do anything. That’s the main
          thing people are controlled by! Thoughts- their perception
          of themselves! They're slowed down by their perception of
          themselves. If you're taught you can’t do anything, you
          won’t do anything. I was taught I could do everything.
        </p>
      </div>
    
      <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
        <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onclick="toggleModal('modal-id')">
          Close
        </button>
        <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onclick="toggleModal('modal-id')">
          Save Changes
        </button>
      </div>
    </div>
  </div>
</div>
<div class="hidden opacity-25 fixed inset-0 z-40 bg-black" id="modal-id-backdrop"></div>
<script type="text/javascript">
  function toggleModal(modalID){
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById(modalID + "-backdrop").classList.toggle("flex");
  }
</script>

      </div>
    </footer>
  )
}
