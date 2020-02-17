const autocomplete = (inp, sugpannel, source) => {
  let selectedSuggestionIndex = -1;
  let characterLength = 1;

  let resetSelectedSuggestion = () => {
    for (var i = 0; i < sugpannel.children.length; i++) {
      sugpannel.children[i].classList.remove("selected");
    }
  };

  let addListItem = (e) => {
    if (e.key === "ArrowDown") {
      resetSelectedSuggestion();
      selectedSuggestionIndex =
        selectedSuggestionIndex < sugpannel.children.length - 1
          ? selectedSuggestionIndex + 1
          : sugpannel.children.length - 1;
      sugpannel.children[selectedSuggestionIndex].classList.add(
        "selected"
      );
      inp.value = sugpannel.children[selectedSuggestionIndex].innerHTML;
      return;
    }
    if (e.key === "ArrowUp") {
      resetSelectedSuggestion();
      selectedSuggestionIndex =
        selectedSuggestionIndex > 0 ? selectedSuggestionIndex - 1 : 0;
      sugpannel.children[selectedSuggestionIndex].classList.add(
        "selected"
      );
      inp.value = sugpannel.children[selectedSuggestionIndex].innerHTML;
      return;
    }
    if (e.key === "Enter") {
      // inp.value = sugpannel.children[selectedSuggestionIndex].innerHTML;
      sugpannel.classList.remove("show");
      selectedSuggestionIndex = -1;
      return;
    }
    sugpannel.classList.add("show");
    const input = inp.value;
    if (input.length > characterLength) {
      sugpannel.innerHTML = "";
      const suggestions = source.filter(function (item) {
        return item.toLowerCase().startsWith(input.toLowerCase());
      });
      suggestions.forEach(function (suggested) {
        const div = document.createElement("div");
        div.innerHTML = suggested;
        div.setAttribute("class", "suggestion");
        sugpannel.appendChild(div);
      });
    }
    if (input === "") {
      sugpannel.innerHTML = "";
    }
  };

  let selectItemList = (e) => {
    if (e.target.className === "suggestion") {
      inp.value = e.target.innerHTML;
      sugpannel.classList.remove("show");
    }
  };

  sugpannel.addEventListener("click", selectItemList);
  inp.addEventListener("keyup", addListItem);
};
export default autocomplete;