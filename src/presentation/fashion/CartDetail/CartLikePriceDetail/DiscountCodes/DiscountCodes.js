import { useI18n } from 'vue-i18n';
import RemoveDiscountCodeForm from './RemoveDiscountCodeForm/RemoveDiscountCodeForm.vue';
import useCartTools from 'hooks/useCartTools';

export default {
  components: { RemoveDiscountCodeForm },
  props: {
    cart: {
      type: Object,
      required: true,
    },
    editable: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { t } = useI18n();

    const { couponCodes } = useCartTools();

    return { t, couponCodes };
  },
};
