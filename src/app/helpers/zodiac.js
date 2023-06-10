export function getZodiac(dateArg) {
    const date = new Date(dateArg);

    const month = date.getMonth() + 1;
    const day = date.getDate();

    if (month === 1 && day >= 20 || month === 2 && day <= 18) return `<svg width="24" height="24" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg"><path d="M74.434 35.028c-.951.508-1.779 1.77-2.655 3.105-1.571 2.393-3.723 5.67-8.055 5.67-4.356 0-6.514-3.282-8.09-5.678-1.542-2.345-2.369-3.373-3.814-3.373-1.435 0-2.259 1.026-3.796 3.367-1.575 2.398-3.732 5.684-8.092 5.684-4.346 0-6.5-3.28-8.073-5.675-1.541-2.347-2.368-3.376-3.814-3.376-1.446 0-2.274 1.028-3.82 3.375-1.346 2.045-2.873 4.363-5.669 5.291a2.548 2.548 0 0 1-1.605-4.835c1.118-.371 2.042-1.774 3.019-3.258 1.576-2.392 3.733-5.668 8.075-5.668 4.346 0 6.5 3.28 8.073 5.675 1.541 2.348 2.368 3.376 3.814 3.376 1.458 0 2.287-1.031 3.834-3.386 1.57-2.39 3.72-5.665 8.054-5.665 4.343 0 6.498 3.276 8.071 5.669 1.546 2.352 2.376 3.382 3.833 3.382 1.433 0 2.257-1.027 3.796-3.371 1.133-1.726 2.417-3.682 4.514-4.802a2.546 2.546 0 1 1 2.4 4.493Zm-.566 17.549c-.951.508-1.779 1.769-2.656 3.105-1.571 2.393-3.722 5.669-8.054 5.669-4.356 0-6.514-3.282-8.09-5.678-1.542-2.345-2.369-3.373-3.814-3.373-1.435 0-2.259 1.026-3.796 3.367-1.575 2.399-3.733 5.684-8.092 5.684-4.346 0-6.5-3.279-8.073-5.674-1.541-2.349-2.368-3.377-3.814-3.377-1.446 0-2.275 1.028-3.82 3.375-1.347 2.046-2.874 4.363-5.669 5.292a2.547 2.547 0 0 1-1.606-4.835c1.119-.372 2.042-1.774 3.02-3.259 1.575-2.392 3.732-5.668 8.075-5.668 4.346 0 6.5 3.28 8.073 5.675 1.541 2.348 2.368 3.377 3.814 3.377 1.458 0 2.288-1.032 3.834-3.387 1.57-2.391 3.72-5.665 8.054-5.665 4.343 0 6.498 3.276 8.071 5.669 1.546 2.352 2.376 3.383 3.833 3.383 1.433 0 2.256-1.028 3.795-3.372 1.134-1.725 2.418-3.682 4.515-4.802a2.547 2.547 0 0 1 2.4 4.494ZM45.211.531C20.413.531.238 20.705.238 45.503c0 24.799 20.175 44.973 44.973 44.973 24.799 0 44.973-20.174 44.973-44.973C90.184 20.705 70.01.531 45.211.531Z" fill-rule="evenodd"></path></svg>
    <span>Водолей</span>`;
    else if (month === 2 && day >= 19 || month === 3 && day <= 20) return `<svg width="24" height="24" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg"><path d="M63.871 47.425h-7.996c.527 6.778 3.408 12.782 7.51 15.355l-2.656 4.236c-5.564-3.489-9.307-11.029-9.868-19.591H40.822c-.56 8.562-4.303 16.102-9.868 19.591l-2.656-4.236c4.103-2.573 6.983-8.577 7.511-15.355h-7.81v-5h7.77c-.633-6.559-3.476-12.316-7.471-14.822l2.656-4.236c5.448 3.417 9.148 10.718 9.827 19.058h10.122c.678-8.34 4.378-15.641 9.826-19.058l2.656 4.236c-3.995 2.506-6.837 8.263-7.471 14.822h7.957v5ZM45.935.219C21.137.219.962 20.394.962 45.192s20.175 44.973 44.973 44.973S90.908 69.99 90.908 45.192 70.733.219 45.935.219Z" fill-rule="evenodd"></path></svg>
    <span>Рыбы</span>`;
    else if (month === 3 && day >= 21 || month === 4 && day <= 19) return `<svg width="24" height="24" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M64.49 60.483c-.356 0-2.526-.098-4.363-.619-1.609-.456-2.94-1.333-2.88-1.461-.746 1.617-1.663 3.173-2.956 4.557-2.523 2.698-6.22 4.211-9.904 4.211-1.205 0-2.408-.162-3.569-.497a2.547 2.547 0 1 1 1.413-4.895c2.869.828 6.298-.117 8.338-2.299 1.293-1.383 2.124-3.204 2.873-5.192-1.615-2.379-2.88-5.288-3.765-8.724-.584-2.268-.98-4.563-1.362-6.783-.382-2.214-.742-4.305-1.273-6.368-.085-.329-.283-1.099-.512-1.331-.156-.159-.67-.308-1.424-.256-8.341.572-6.444 10.435-6.444 15.844v11.035a2.418 2.418 0 1 1-4.836 0V35.562c0-1.828-.657-3.599-1.802-4.859-1.112-1.233-2.549-1.908-4.055-1.908-2.062 0-3.992 1.28-5.038 3.34a2.417 2.417 0 1 1-4.312-2.19c1.874-3.692 5.457-5.986 9.35-5.986 2.894 0 5.607 1.242 7.64 3.499a11.4 11.4 0 0 1 1.473 2.053c1.966-2.159 4.762-3.571 7.682-3.768 2.212-.149 4.127.477 5.394 1.761 1.192 1.21 1.599 2.79 1.818 3.638.583 2.265.978 4.557 1.36 6.774.381 2.216.742 4.31 1.274 6.376.104.403.221.785.336 1.169 1.687-3.587 5.325-6.082 9.544-6.082 5.819 0 10.552 4.734 10.552 10.552 0 5.819-4.733 10.552-10.552 10.552ZM45.786.53C20.987.53.813 20.705.813 45.503c0 24.799 20.174 44.974 44.973 44.974 24.798 0 44.973-20.175 44.973-44.974C90.759 20.705 70.584.53 45.786.53Z"></path><path d="M64.49 44.474c-4.87.001-7.223 6.352-3.601 9.549a5.465 5.465 0 0 0 3.601 1.365 5.463 5.463 0 0 0 5.457-5.457 5.463 5.463 0 0 0-5.457-5.457"></path></g></svg>
    <span>Овен</span>`;
    else if (month === 4 && day >= 20 || month === 5 && day <= 20) return `<svg width="24" height="24" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M45.838 41.09c-6.437 0-11.675 5.238-11.675 11.675 0 6.438 5.238 11.675 11.675 11.675 6.438 0 11.676-5.237 11.676-11.675 0-6.437-5.238-11.675-11.676-11.675"></path><path d="M62.608 52.765c0 9.247-7.523 16.77-16.77 16.77-9.246 0-16.769-7.523-16.769-16.77 0-6.049 3.23-11.345 8.046-14.295-2.331-1.464-4.128-3.395-5.809-5.205-2.839-3.059-5.291-5.7-9.965-5.952l.273-5.086c6.732.361 10.288 4.191 13.426 7.571 2.977 3.207 5.548 5.976 10.739 5.976 5.2 0 7.774-2.772 10.754-5.982 3.139-3.381 6.697-7.214 13.432-7.566l.265 5.088c-4.672.244-7.124 2.886-9.964 5.944-1.669 1.799-3.453 3.717-5.76 5.178 4.847 2.943 8.102 8.256 8.102 14.329ZM45.786.907C20.988.907.813 21.082.813 45.88s20.175 44.973 44.973 44.973S90.759 70.678 90.759 45.88 70.584.907 45.786.907Z"></path></g></svg>
    <span>Телец</span>`;
    else if (month === 5 && day >= 21 || month === 6 && day <= 21) return `<svg width="24" height="24" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M41.656 32.95v25.861a35.332 35.332 0 0 1 3.704-.196c1.253 0 2.49.068 3.705.196V32.95a35.366 35.366 0 0 1-3.705.196c-1.253 0-2.49-.068-3.704-.196"></path><path d="M68.016 68.939 63.7 71.646c-2.977-4.747-10.348-7.936-18.34-7.936-7.992 0-15.363 3.189-18.34 7.936l-4.316-2.707c2.707-4.316 7.764-7.581 13.857-9.197V32.019c-6.094-1.617-11.15-4.881-13.857-9.197l4.316-2.707c2.977 4.747 10.347 7.936 18.34 7.936s15.363-3.189 18.34-7.936l4.316 2.707c-2.707 4.316-7.763 7.58-13.857 9.197v27.723c6.094 1.616 11.15 4.881 13.857 9.197ZM45.36.907C20.562.907.387 21.082.387 45.88S20.562 90.853 45.36 90.853 90.333 70.678 90.333 45.88 70.158.907 45.36.907Z"></path></g></svg>
    <span>Близнецы</span>`;
    else if (month === 6 && day >= 22 || month === 7 && day <= 22) return `<svg width="24" height="24" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M33.046 47.738a4.463 4.463 0 0 0-4.459 4.457 4.464 4.464 0 0 0 4.459 4.458c2.458 0 4.458-2 4.458-4.458s-2-4.457-4.458-4.457M58.824 44.023c2.458 0 4.458-2 4.458-4.458s-2-4.458-4.458-4.458-4.459 2-4.459 4.458a4.464 4.464 0 0 0 4.459 4.458"></path><path d="M68.195 52.813C65.02 60.76 55.799 66.1 45.247 66.1c-6.689 0-12.896-2.111-17.478-5.943l-.012-.013a9.548 9.548 0 0 1-4.264-7.949c0-5.267 4.285-9.552 9.553-9.552 5.267 0 9.552 4.285 9.552 9.552 0 3.254-1.638 6.129-4.129 7.855 2.147.613 4.435.955 6.778.955 8.354 0 15.846-4.146 18.218-10.081a2.546 2.546 0 1 1 4.73 1.889Zm-44.52-13.866C26.849 31 36.071 25.661 46.622 25.661c6.687 0 12.894 2.11 17.478 5.942l.013.014a9.547 9.547 0 0 1 4.263 7.948c0 5.267-4.284 9.553-9.552 9.553-5.267 0-9.553-4.286-9.553-9.553 0-3.254 1.638-6.129 4.129-7.854a24.73 24.73 0 0 0-6.778-.956c-8.355 0-15.845 4.146-18.217 10.082a2.547 2.547 0 1 1-4.73-1.89ZM45.934.907C21.137.907.962 21.082.962 45.88s20.175 44.973 44.972 44.973c24.799 0 44.974-20.175 44.974-44.973S70.733.907 45.934.907Z"></path></g></svg>
    <span>Рак</span>`;
    else if (month === 7 && day >= 23 || month === 8 && day <= 22) return `<svg width="24" height="24" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M57.937 67.835c-4.479 0-8.368-3.188-9.247-7.581a9.458 9.458 0 0 1 1.62-7.395l3.362-4.622c3.079-4.262 5.451-12.738 2.079-17.486a7.416 7.416 0 0 0-6.004-3.107c-4.057 0-7.359 3.301-7.359 7.359v9.906l-.011.113a9.722 9.722 0 0 1 2.275 6.255c0 5.384-4.38 9.765-9.764 9.765-5.385 0-9.764-4.381-9.764-9.765s4.379-9.765 9.764-9.765c.832 0 1.635.116 2.406.313v-6.822c0-6.867 5.586-12.454 12.454-12.454 15.058 0 16.175 18.139 8.044 28.685l-3.362 4.621a4.346 4.346 0 0 0-.744 3.4 4.346 4.346 0 0 0 4.251 3.485 2.569 2.569 0 0 0 2.566-2.566 2.547 2.547 0 0 1 5.094 0c0 4.224-3.436 7.661-7.66 7.661ZM45.36.219C20.563.219.388 20.393.388 45.192c0 24.798 20.175 44.973 44.972 44.973 24.798 0 44.973-20.175 44.973-44.973C90.333 20.393 70.158.219 45.36.219Z"></path><path d="M34.888 46.607a4.676 4.676 0 0 0-4.671 4.67 4.676 4.676 0 0 0 4.671 4.67 4.675 4.675 0 0 0 4.67-4.67 4.675 4.675 0 0 0-4.67-4.67"></path></g></svg>
    <span>Лев</span>`;
    else if (month === 8 && day >= 23 || month === 9 && day <= 22) return `<svg width="24" height="24" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="m61.21 42.005-.088-.193v12.78h.077v4.4c4.241-2.907 6.906-6.748 7.814-12.636l.082-.517c.192-1.2.641-4.009-.059-4.67-1.227-1.157-4.942-.484-7.826.836"></path><path d="m74.126 46.643-.077.489c-1.064 6.894-4.208 11.515-8.302 14.827h6.734v5.095h-8.873a7.454 7.454 0 0 1-3.667-.964h-.972c-2.522 1.176-5.15 2.123-7.723 2.97l-1.594-4.839c2.324-.765 4.443-1.554 6.376-2.41V35.354a4.348 4.348 0 0 0-1.287-3.089 4.276 4.276 0 0 0-3.073-1.286 4.36 4.36 0 0 0-4.183 3.171c.072.442.12.9.12 1.402v27.991h-5.407V35.354c0-.371.033-.749.082-1.135a4.338 4.338 0 0 0-4.145-3.042c-1.963 0-3.657 1.323-4.185 3.186.072.457.123.927.123 1.404v27.776h-5.407V35.552c0-.371.032-.747.08-1.128a4.343 4.343 0 0 0-4.143-3.032c-2.404 0-4.36 1.963-4.36 4.375v4.478h-5.094v-4.478c0-5.221 4.241-9.47 9.454-9.47 2.512 0 4.878.979 6.666 2.755a9.45 9.45 0 0 1 6.866-2.97c2.516 0 4.885.982 6.674 2.762a9.45 9.45 0 0 1 6.859-2.96c2.537 0 4.911.991 6.687 2.79a9.398 9.398 0 0 1 2.767 6.68v1.217c2.981-1.019 8.192-2.144 11.41.893 2.66 2.51 2.018 6.523 1.594 9.179ZM45.212.219C20.413.219.238 20.394.238 45.192s20.175 44.973 44.974 44.973c24.798 0 44.972-20.175 44.972-44.973S70.01.219 45.212.219Z"></path></g></svg>
    <span>Дева</span>`;
    else if (month === 9 && day >= 23 || month === 10 && day <= 22) return `<svg width="24" height="24" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg"><path d="M71.819 49.047H58.48l-.005.001a2.548 2.548 0 0 1-2.524-2.919c.062-.416.092-.873.092-1.395 0-5.778-4.701-10.478-10.478-10.478-5.768 0-10.461 4.7-10.461 10.478 0 .51.031.98.092 1.395a2.547 2.547 0 0 1-2.149 2.891c-.125.018-.248.017-.371.017v.01H19.752v-5.095h10.297c.411-8.223 7.202-14.791 15.516-14.791 8.323 0 15.121 6.568 15.532 14.791h10.722v5.095ZM19.888 61.223h51.796v-5.095H19.888v5.095ZM45.786.219C20.988.219.813 20.394.813 45.192s20.175 44.973 44.973 44.973S90.758 69.99 90.758 45.192 70.584.219 45.786.219Z" fill-rule="evenodd"></path></svg>
    <span>Весы</span>`;
    else if (month === 10 && day >= 23 || month === 11 && day <= 21) return `<svg width="24" height="24" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg"><path d="M73.197 64.61s-4.924 4.015-6.295 3.916v-4.888h-2.371a7.458 7.458 0 0 1-3.668-.964l-1.366-.991a7.572 7.572 0 0 1-1.309-1.556l-.239-.581a13.19 13.19 0 0 1-.999-5.037V32.158c0-1.035-.286-2.071-.919-2.889-.852-1.1-2.095-1.706-3.441-1.706a4.359 4.359 0 0 0-4.182 3.173c.071.446.12.908.12 1.401v27.99h-5.407V31.939c0-.374.033-.752.081-1.135a4.267 4.267 0 0 0-1.054-1.756 4.346 4.346 0 0 0-3.09-1.287c-1.963 0-3.657 1.324-4.185 3.187.072.457.123.927.123 1.404v27.775h-5.408v-27.99c0-.371.033-.747.081-1.129a4.274 4.274 0 0 0-1.054-1.746 4.349 4.349 0 0 0-3.614-1.255c-2.227.261-3.835 2.28-3.835 4.522v4.3h-5.094V32.65c0-5.133 3.956-9.567 9.085-9.762a9.406 9.406 0 0 1 7.035 2.748 9.45 9.45 0 0 1 6.866-2.97c2.515 0 4.883.982 6.673 2.762a9.452 9.452 0 0 1 6.859-2.96c2.537 0 4.911.991 6.688 2.791a9.395 9.395 0 0 1 2.765 6.68v19.238h.078v4.956a2.41 2.41 0 0 0 2.41 2.41h2.371v-4.855c1.371-.082 6.295 3.916 6.295 3.916 1.934 1.934 1.934 5.09 0 7.006ZM45.36.531C20.562.531.387 20.705.387 45.503c0 24.799 20.175 44.973 44.973 44.973 24.799 0 44.973-20.174 44.973-44.973C90.333 20.705 70.159.531 45.36.531Z" fill-rule="evenodd"></path></svg>
    <span>Скорпион</span>`;
    else if (month === 11 && day >= 22 || month === 12 && day <= 21) return `<svg width="24" height="24" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg"><path d="M68.13 40.771a2.547 2.547 0 0 1-5.095 0v-8.15l-16.9 16.234 6.248 6.248a2.546 2.546 0 1 1-3.603 3.602l-6.32-6.32-14.409 13.84a2.536 2.536 0 0 1-1.764.711 2.546 2.546 0 0 1-1.765-4.384l14.335-13.77-5.078-5.078a2.548 2.548 0 0 1 3.603-3.602l5.15 5.15 16.745-16.085h-7.28a2.547 2.547 0 0 1 0-5.095H68.13v16.699ZM45.935.531C21.137.531.962 20.705.962 45.504c0 24.798 20.175 44.972 44.973 44.972s44.973-20.174 44.973-44.972C90.908 20.705 70.733.531 45.935.531Z" fill-rule="evenodd"></path></svg>
    <span>Стрелец</span>`;
    else if (month === 12 && day >= 22 || month === 1 && day <= 19) return `<svg width="24" height="24" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg"><path d="M61.846 52.463a2.549 2.549 0 0 1-1.47-4.878c3.632-1.095 6.169-4.52 6.169-8.328 0-4.794-3.908-8.695-8.712-8.695-4.66 0-8.464 3.688-8.675 8.296.101.282.166.581.166.897v23.87a2.669 2.669 0 0 1-2.668 2.668h-2.89a2.669 2.669 0 0 1-2.668-2.668v-23.87c0-.316.065-.615.166-.897-.211-4.608-4.015-8.296-8.675-8.296-4.803 0-8.712 3.901-8.712 8.695 0 3.808 2.538 7.233 6.17 8.328a2.548 2.548 0 0 1-1.471 4.878c-5.766-1.739-9.793-7.169-9.793-13.206 0-7.603 6.194-13.79 13.806-13.79 5.636 0 10.485 3.402 12.622 8.257 2.137-4.855 6.987-8.257 12.622-8.257 7.613 0 13.807 6.187 13.807 13.79 0 6.037-4.028 11.467-9.794 13.206ZM45.211.907C20.413.907.238 21.082.238 45.88s20.175 44.973 44.973 44.973S90.184 70.678 90.184 45.88 70.009.907 45.211.907Z" fill-rule="evenodd"></path></svg>
    <span>Козерог</span>`;
}