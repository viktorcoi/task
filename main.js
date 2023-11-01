$(document).ready(() => {
    
    const setCheckboxStateAndParents = (checkbox) => {
        checkbox.prop("checked", true);
        const idParts = checkbox.attr("id").split("__");
        if (idParts.length > 1) {
            const parentId = idParts.slice(0, -1).join("__");
            setCheckboxStateAndParents($("#" + parentId));
        }
    }
 
    const resetCheckboxStateAndChildren = (checkbox) => {
        checkbox.prop("checked", false);
        const checkboxId = checkbox.attr("id");
        $("[id^='" + checkboxId + "__']").prop("checked", false);
    }

    $(":checkbox").on("change", (e) => {
        const checkbox = $(e.target);
        if (checkbox.prop("checked")) {
            setCheckboxStateAndParents(checkbox);
        } else {
            resetCheckboxStateAndChildren(checkbox);
        }
    });
    
});