import useCartTools from 'hooks/useCartTools';

//removeDiscountCode
export default {
  props: {
    codeId: {
      type: String,
      required: true,
    },
    codes: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const { removeDiscount: rd } = useCartTools();
    const removeDiscount = () =>
      rd(props.codeId, props.codes);
    return { removeDiscount };
  },
};
