import dmnPackage from 'dmn-moddle/resources/dmn/json/dmn13.json';
import dmndiPackage from 'dmn-moddle/resources/dmn/json/dmndi13.json';

/**
 * DMN 1.6 namespaces, as defined by the official schemas:
 *
 *   - MODEL: https://www.omg.org/spec/DMN/20240513/DMN16.xsd
 *   - DMNDI: https://www.omg.org/spec/DMN/20230324/DMNDI15.xsd
 *     (DMN 1.6 re-uses DMNDI 1.5)
 *
 * DC (http://www.omg.org/spec/DMN/20180521/DC/) and
 * DI (http://www.omg.org/spec/DMN/20180521/DI/) are unchanged in DMN 1.6,
 * so the built-in `dc` and `di` packages are used as is.
 */
export const DMN16_MODEL_NS = 'https://www.omg.org/spec/DMN/20240513/MODEL/';
export const DMN16_DMNDI_NS = 'https://www.omg.org/spec/DMN/20230324/DMNDI/';

/**
 * The original DMN 1.3 meta-model shipped with `dmn-moddle`,
 * re-bound to the DMN 1.6 namespaces.
 *
 * Package keys and prefixes must stay the same, as dmn-js
 * relies on them (`dmn:Definitions`, `dmndi:DMNShape`, ...).
 */
export const dmn16Packages = {
  dmn: {
    ...dmnPackage,
    uri: DMN16_MODEL_NS
  },
  dmndi: {
    ...dmndiPackage,
    uri: DMN16_DMNDI_NS
  }
};
