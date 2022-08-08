document.addEventListener("DOMContentLoaded", function () {
  const m_body = document.querySelector("body"),
    m_header = document.querySelector("header"),
    m_welcome = document.querySelector(".welcome"),
    m_close_window = document.querySelectorAll(".close-window");

  m_body.style.paddingBottom = `${23 + m_header.offsetHeight}px`;

  if (m_close_window) {
    let block = "";

    for (let i = 0; i < m_close_window.length; i++) {
      m_close_window[i].addEventListener("click", function () {
        block = m_close_window[i];
        while (block.tagName != "SECTION") block = block.parentElement;
        block.remove();
      });
    }
  }

  if (m_welcome) {
    m_welcome.addEventListener("click", function () {
      this.remove();
    });
  }

  [].forEach.call(
    document.querySelectorAll('.r-tel input[type="tel"]'),
    function (input) {
      var keyCode;
      function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "(___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
          });
        i = new_value.indexOf("_");
        if (i != -1) {
          i < 5 && (i = 3);
          // new_value = new_value.slice(0, i)
        }
        var reg = matrix
          .substr(0, this.value.length)
          .replace(/_+/g, function (a) {
            return "\\d{1," + a.length + "}";
          })
          .replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (
          !reg.test(this.value) ||
          this.value.length < 5 ||
          (keyCode > 47 && keyCode < 58)
        )
          this.value = new_value;
        if (event.type == "blur" && this.value.length < 5) this.value = "";
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
    }
  );
});
