import { CatalogLotsEffects } from "src/app/features/dried/store/catalog-lots/catalog-lots.effects";
import { CatalogProductsEffects } from "src/app/features/dried/store/catalog-products/catalog-products.effects";
import { OpenLotEffects } from "src/app/features/dried/store/open-lot/open-lot.effects";
import { OutputEffects } from "src/app/features/dried/store/output/output.effects";
import { LogginEffects } from "src/app/features/landing/store/login/login.effects";
import { MenuEffects } from "src/app/features/menu/store/menu/menu.effect";
import { CloseLotEffects } from "src/app/features/packaging/store/close-lot/close-lot.effects";
import { ExitEffects } from "src/app/features/packaging/store/exit/exit.effects";
import { OpenLoteEffects } from "src/app/features/packaging/store/open-lot/open-lot.effects";
import { PackagingEffects } from "src/app/features/packaging/store/packaging/packaging.effect";
import { CloseLotDriedEffects } from "src/app/features/dried/store/close-lot/close-lot.effects";

export const effects = [
  LogginEffects,
  MenuEffects,
  PackagingEffects,
  OpenLoteEffects,
  CloseLotEffects,
  ExitEffects,
  OpenLotEffects,
  CloseLotDriedEffects,
  OutputEffects,
  CatalogProductsEffects,
  CatalogLotsEffects,
];
