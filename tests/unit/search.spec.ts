import { shallowMount, mount } from "@vue/test-utils";
import Pagination from "@/components/Pagination.vue";
import { createStore } from "vuex";

describe("Pagination.vue", () => {
  const store = createStore({
    state: {
      pageInfo: {
        pages: 30,
        next: "https://rickandmortyapi.com/api/character/?page=3",
        prev: "https://rickandmortyapi.com/api/character/?page=1",
      },
      pageNumber: 2,
    },
    getters: {
      pageInfo: (state) => state.pageInfo,
      pageNumber: (state) => state.pageNumber,
    },
    actions: {
      getCharacters: jest.fn(),
      getUrlParams: jest.fn(),
      getPageNumber: jest.fn(),
    },
  });
  test("should display current page number", () => {
    const wrapper = shallowMount(Pagination, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.get(".pageNumber").text()).toEqual("Page 2 of 30");
  });
});
