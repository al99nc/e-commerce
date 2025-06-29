
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model carts
 * 
 */
export type carts = $Result.DefaultSelection<Prisma.$cartsPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model social_profiles
 * 
 */
export type social_profiles = $Result.DefaultSelection<Prisma.$social_profilesPayload>
/**
 * Model credentials
 * 
 */
export type credentials = $Result.DefaultSelection<Prisma.$credentialsPayload>
/**
 * Model cart_items
 * 
 */
export type cart_items = $Result.DefaultSelection<Prisma.$cart_itemsPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model order_lines
 * 
 */
export type order_lines = $Result.DefaultSelection<Prisma.$order_linesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  CUSTOMER: 'CUSTOMER',
  STAFF: 'STAFF'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Locale: {
  EN: 'EN',
  AR: 'AR',
  FR: 'FR'
};

export type Locale = (typeof Locale)[keyof typeof Locale]


export const Status: {
  ACTIVE: 'ACTIVE',
  ORDERED: 'ORDERED',
  ABANDONNED: 'ABANDONNED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const social_platform: {
  FACEBOOK: 'FACEBOOK',
  GITHUP: 'GITHUP',
  INSTGRAM: 'INSTGRAM',
  TWITTER: 'TWITTER'
};

export type social_platform = (typeof social_platform)[keyof typeof social_platform]


export const provider: {
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK',
  TWITTER: 'TWITTER',
  EMAIL: 'EMAIL'
};

export type provider = (typeof provider)[keyof typeof provider]


export const hash_method: {
  md5: 'md5',
  sha1: 'sha1',
  sha265: 'sha265'
};

export type hash_method = (typeof hash_method)[keyof typeof hash_method]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Locale = $Enums.Locale

export const Locale: typeof $Enums.Locale

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type social_platform = $Enums.social_platform

export const social_platform: typeof $Enums.social_platform

export type provider = $Enums.provider

export const provider: typeof $Enums.provider

export type hash_method = $Enums.hash_method

export const hash_method: typeof $Enums.hash_method

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carts`: Exposes CRUD operations for the **carts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.carts.findMany()
    * ```
    */
  get carts(): Prisma.cartsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.social_profiles`: Exposes CRUD operations for the **social_profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Social_profiles
    * const social_profiles = await prisma.social_profiles.findMany()
    * ```
    */
  get social_profiles(): Prisma.social_profilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.credentials`: Exposes CRUD operations for the **credentials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Credentials
    * const credentials = await prisma.credentials.findMany()
    * ```
    */
  get credentials(): Prisma.credentialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart_items`: Exposes CRUD operations for the **cart_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cart_items
    * const cart_items = await prisma.cart_items.findMany()
    * ```
    */
  get cart_items(): Prisma.cart_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_lines`: Exposes CRUD operations for the **order_lines** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_lines
    * const order_lines = await prisma.order_lines.findMany()
    * ```
    */
  get order_lines(): Prisma.order_linesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    carts: 'carts',
    orders: 'orders',
    social_profiles: 'social_profiles',
    credentials: 'credentials',
    cart_items: 'cart_items',
    products: 'products',
    order_lines: 'order_lines'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "carts" | "orders" | "social_profiles" | "credentials" | "cart_items" | "products" | "order_lines"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      carts: {
        payload: Prisma.$cartsPayload<ExtArgs>
        fields: Prisma.cartsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          findFirst: {
            args: Prisma.cartsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          findMany: {
            args: Prisma.cartsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>[]
          }
          create: {
            args: Prisma.cartsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          createMany: {
            args: Prisma.cartsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cartsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>[]
          }
          delete: {
            args: Prisma.cartsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          update: {
            args: Prisma.cartsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          deleteMany: {
            args: Prisma.cartsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cartsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>[]
          }
          upsert: {
            args: Prisma.cartsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          aggregate: {
            args: Prisma.CartsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarts>
          }
          groupBy: {
            args: Prisma.cartsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartsCountArgs<ExtArgs>
            result: $Utils.Optional<CartsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      social_profiles: {
        payload: Prisma.$social_profilesPayload<ExtArgs>
        fields: Prisma.social_profilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.social_profilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_profilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.social_profilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_profilesPayload>
          }
          findFirst: {
            args: Prisma.social_profilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_profilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.social_profilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_profilesPayload>
          }
          findMany: {
            args: Prisma.social_profilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_profilesPayload>[]
          }
          create: {
            args: Prisma.social_profilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_profilesPayload>
          }
          createMany: {
            args: Prisma.social_profilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.social_profilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_profilesPayload>[]
          }
          delete: {
            args: Prisma.social_profilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_profilesPayload>
          }
          update: {
            args: Prisma.social_profilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_profilesPayload>
          }
          deleteMany: {
            args: Prisma.social_profilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.social_profilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.social_profilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_profilesPayload>[]
          }
          upsert: {
            args: Prisma.social_profilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_profilesPayload>
          }
          aggregate: {
            args: Prisma.Social_profilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocial_profiles>
          }
          groupBy: {
            args: Prisma.social_profilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Social_profilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.social_profilesCountArgs<ExtArgs>
            result: $Utils.Optional<Social_profilesCountAggregateOutputType> | number
          }
        }
      }
      credentials: {
        payload: Prisma.$credentialsPayload<ExtArgs>
        fields: Prisma.credentialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.credentialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.credentialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload>
          }
          findFirst: {
            args: Prisma.credentialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.credentialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload>
          }
          findMany: {
            args: Prisma.credentialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload>[]
          }
          create: {
            args: Prisma.credentialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload>
          }
          createMany: {
            args: Prisma.credentialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.credentialsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload>[]
          }
          delete: {
            args: Prisma.credentialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload>
          }
          update: {
            args: Prisma.credentialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload>
          }
          deleteMany: {
            args: Prisma.credentialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.credentialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.credentialsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload>[]
          }
          upsert: {
            args: Prisma.credentialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload>
          }
          aggregate: {
            args: Prisma.CredentialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCredentials>
          }
          groupBy: {
            args: Prisma.credentialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CredentialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.credentialsCountArgs<ExtArgs>
            result: $Utils.Optional<CredentialsCountAggregateOutputType> | number
          }
        }
      }
      cart_items: {
        payload: Prisma.$cart_itemsPayload<ExtArgs>
        fields: Prisma.cart_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cart_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cart_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          findFirst: {
            args: Prisma.cart_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cart_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          findMany: {
            args: Prisma.cart_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>[]
          }
          create: {
            args: Prisma.cart_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          createMany: {
            args: Prisma.cart_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cart_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>[]
          }
          delete: {
            args: Prisma.cart_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          update: {
            args: Prisma.cart_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          deleteMany: {
            args: Prisma.cart_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cart_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cart_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>[]
          }
          upsert: {
            args: Prisma.cart_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          aggregate: {
            args: Prisma.Cart_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart_items>
          }
          groupBy: {
            args: Prisma.cart_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cart_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cart_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Cart_itemsCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      order_lines: {
        payload: Prisma.$order_linesPayload<ExtArgs>
        fields: Prisma.order_linesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_linesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_linesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload>
          }
          findFirst: {
            args: Prisma.order_linesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_linesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload>
          }
          findMany: {
            args: Prisma.order_linesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload>[]
          }
          create: {
            args: Prisma.order_linesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload>
          }
          createMany: {
            args: Prisma.order_linesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.order_linesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload>[]
          }
          delete: {
            args: Prisma.order_linesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload>
          }
          update: {
            args: Prisma.order_linesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload>
          }
          deleteMany: {
            args: Prisma.order_linesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_linesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.order_linesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload>[]
          }
          upsert: {
            args: Prisma.order_linesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_linesPayload>
          }
          aggregate: {
            args: Prisma.Order_linesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_lines>
          }
          groupBy: {
            args: Prisma.order_linesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_linesGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_linesCountArgs<ExtArgs>
            result: $Utils.Optional<Order_linesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    carts?: cartsOmit
    orders?: ordersOmit
    social_profiles?: social_profilesOmit
    credentials?: credentialsOmit
    cart_items?: cart_itemsOmit
    products?: productsOmit
    order_lines?: order_linesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    carts: number
    orders: number
    social_profiles: number
    credentials: number
    cart_items: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | UserCountOutputTypeCountCartsArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    social_profiles?: boolean | UserCountOutputTypeCountSocial_profilesArgs
    credentials?: boolean | UserCountOutputTypeCountCredentialsArgs
    cart_items?: boolean | UserCountOutputTypeCountCart_itemsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSocial_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: social_profilesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCredentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: credentialsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_itemsWhereInput
  }


  /**
   * Count Type CartsCountOutputType
   */

  export type CartsCountOutputType = {
    cart_items: number
  }

  export type CartsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | CartsCountOutputTypeCountCart_itemsArgs
  }

  // Custom InputTypes
  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsCountOutputType
     */
    select?: CartsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_itemsWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_lines: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_lines?: boolean | OrdersCountOutputTypeCountOrder_linesArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_linesWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    cart_items: number
    order_lines: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | ProductsCountOutputTypeCountCart_itemsArgs
    order_lines?: boolean | ProductsCountOutputTypeCountOrder_linesArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_itemsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrder_linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_linesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    slug: string | null
    email: string | null
    phone: string | null
    role: $Enums.UserRole | null
    name: string | null
    avatar: string | null
    locale: $Enums.Locale | null
    created_at: Date | null
    updated_at: Date | null
    last_login: Date | null
    email_validated: Date | null
    phone_validated: Date | null
    bio: string | null
    company: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    email: string | null
    phone: string | null
    role: $Enums.UserRole | null
    name: string | null
    avatar: string | null
    locale: $Enums.Locale | null
    created_at: Date | null
    updated_at: Date | null
    last_login: Date | null
    email_validated: Date | null
    phone_validated: Date | null
    bio: string | null
    company: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    slug: number
    email: number
    phone: number
    role: number
    name: number
    avatar: number
    locale: number
    created_at: number
    updated_at: number
    last_login: number
    email_validated: number
    phone_validated: number
    bio: number
    company: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    slug?: true
    email?: true
    phone?: true
    role?: true
    name?: true
    avatar?: true
    locale?: true
    created_at?: true
    updated_at?: true
    last_login?: true
    email_validated?: true
    phone_validated?: true
    bio?: true
    company?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    slug?: true
    email?: true
    phone?: true
    role?: true
    name?: true
    avatar?: true
    locale?: true
    created_at?: true
    updated_at?: true
    last_login?: true
    email_validated?: true
    phone_validated?: true
    bio?: true
    company?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    slug?: true
    email?: true
    phone?: true
    role?: true
    name?: true
    avatar?: true
    locale?: true
    created_at?: true
    updated_at?: true
    last_login?: true
    email_validated?: true
    phone_validated?: true
    bio?: true
    company?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    slug: string
    email: string
    phone: string
    role: $Enums.UserRole
    name: string
    avatar: string
    locale: $Enums.Locale
    created_at: Date
    updated_at: Date
    last_login: Date | null
    email_validated: Date | null
    phone_validated: Date | null
    bio: string | null
    company: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    name?: boolean
    avatar?: boolean
    locale?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_login?: boolean
    email_validated?: boolean
    phone_validated?: boolean
    bio?: boolean
    company?: boolean
    carts?: boolean | User$cartsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    social_profiles?: boolean | User$social_profilesArgs<ExtArgs>
    credentials?: boolean | User$credentialsArgs<ExtArgs>
    cart_items?: boolean | User$cart_itemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    name?: boolean
    avatar?: boolean
    locale?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_login?: boolean
    email_validated?: boolean
    phone_validated?: boolean
    bio?: boolean
    company?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    name?: boolean
    avatar?: boolean
    locale?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_login?: boolean
    email_validated?: boolean
    phone_validated?: boolean
    bio?: boolean
    company?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    name?: boolean
    avatar?: boolean
    locale?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_login?: boolean
    email_validated?: boolean
    phone_validated?: boolean
    bio?: boolean
    company?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "email" | "phone" | "role" | "name" | "avatar" | "locale" | "created_at" | "updated_at" | "last_login" | "email_validated" | "phone_validated" | "bio" | "company", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | User$cartsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    social_profiles?: boolean | User$social_profilesArgs<ExtArgs>
    credentials?: boolean | User$credentialsArgs<ExtArgs>
    cart_items?: boolean | User$cart_itemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      carts: Prisma.$cartsPayload<ExtArgs>[]
      orders: Prisma.$ordersPayload<ExtArgs>[]
      social_profiles: Prisma.$social_profilesPayload<ExtArgs>[]
      credentials: Prisma.$credentialsPayload<ExtArgs>[]
      cart_items: Prisma.$cart_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      email: string
      phone: string
      role: $Enums.UserRole
      name: string
      avatar: string
      locale: $Enums.Locale
      created_at: Date
      updated_at: Date
      last_login: Date | null
      email_validated: Date | null
      phone_validated: Date | null
      bio: string | null
      company: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carts<T extends User$cartsArgs<ExtArgs> = {}>(args?: Subset<T, User$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    social_profiles<T extends User$social_profilesArgs<ExtArgs> = {}>(args?: Subset<T, User$social_profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$social_profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    credentials<T extends User$credentialsArgs<ExtArgs> = {}>(args?: Subset<T, User$credentialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cart_items<T extends User$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, User$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly slug: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly locale: FieldRef<"User", 'Locale'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly last_login: FieldRef<"User", 'DateTime'>
    readonly email_validated: FieldRef<"User", 'DateTime'>
    readonly phone_validated: FieldRef<"User", 'DateTime'>
    readonly bio: FieldRef<"User", 'String'>
    readonly company: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.carts
   */
  export type User$cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    where?: cartsWhereInput
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    cursor?: cartsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * User.social_profiles
   */
  export type User$social_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_profiles
     */
    select?: social_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_profiles
     */
    omit?: social_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_profilesInclude<ExtArgs> | null
    where?: social_profilesWhereInput
    orderBy?: social_profilesOrderByWithRelationInput | social_profilesOrderByWithRelationInput[]
    cursor?: social_profilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Social_profilesScalarFieldEnum | Social_profilesScalarFieldEnum[]
  }

  /**
   * User.credentials
   */
  export type User$credentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credentialsInclude<ExtArgs> | null
    where?: credentialsWhereInput
    orderBy?: credentialsOrderByWithRelationInput | credentialsOrderByWithRelationInput[]
    cursor?: credentialsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CredentialsScalarFieldEnum | CredentialsScalarFieldEnum[]
  }

  /**
   * User.cart_items
   */
  export type User$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    where?: cart_itemsWhereInput
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    cursor?: cart_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model carts
   */

  export type AggregateCarts = {
    _count: CartsCountAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  export type CartsMinAggregateOutputType = {
    id: string | null
    created_by: string | null
    status: $Enums.Status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CartsMaxAggregateOutputType = {
    id: string | null
    created_by: string | null
    status: $Enums.Status | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CartsCountAggregateOutputType = {
    id: number
    created_by: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CartsMinAggregateInputType = {
    id?: true
    created_by?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type CartsMaxAggregateInputType = {
    id?: true
    created_by?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type CartsCountAggregateInputType = {
    id?: true
    created_by?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CartsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to aggregate.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carts
    **/
    _count?: true | CartsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartsMaxAggregateInputType
  }

  export type GetCartsAggregateType<T extends CartsAggregateArgs> = {
        [P in keyof T & keyof AggregateCarts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarts[P]>
      : GetScalarType<T[P], AggregateCarts[P]>
  }




  export type cartsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartsWhereInput
    orderBy?: cartsOrderByWithAggregationInput | cartsOrderByWithAggregationInput[]
    by: CartsScalarFieldEnum[] | CartsScalarFieldEnum
    having?: cartsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartsCountAggregateInputType | true
    _min?: CartsMinAggregateInputType
    _max?: CartsMaxAggregateInputType
  }

  export type CartsGroupByOutputType = {
    id: string
    created_by: string
    status: $Enums.Status
    created_at: Date
    updated_at: Date
    _count: CartsCountAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  type GetCartsGroupByPayload<T extends cartsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartsGroupByOutputType[P]>
            : GetScalarType<T[P], CartsGroupByOutputType[P]>
        }
      >
    >


  export type cartsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_by?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    created?: boolean | UserDefaultArgs<ExtArgs>
    cart_items?: boolean | carts$cart_itemsArgs<ExtArgs>
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type cartsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_by?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    created?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type cartsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_by?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    created?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type cartsSelectScalar = {
    id?: boolean
    created_by?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type cartsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_by" | "status" | "created_at" | "updated_at", ExtArgs["result"]["carts"]>
  export type cartsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created?: boolean | UserDefaultArgs<ExtArgs>
    cart_items?: boolean | carts$cart_itemsArgs<ExtArgs>
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cartsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type cartsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $cartsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carts"
    objects: {
      created: Prisma.$UserPayload<ExtArgs>
      cart_items: Prisma.$cart_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_by: string
      status: $Enums.Status
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["carts"]>
    composites: {}
  }

  type cartsGetPayload<S extends boolean | null | undefined | cartsDefaultArgs> = $Result.GetResult<Prisma.$cartsPayload, S>

  type cartsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cartsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartsCountAggregateInputType | true
    }

  export interface cartsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carts'], meta: { name: 'carts' } }
    /**
     * Find zero or one Carts that matches the filter.
     * @param {cartsFindUniqueArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartsFindUniqueArgs>(args: SelectSubset<T, cartsFindUniqueArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cartsFindUniqueOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartsFindUniqueOrThrowArgs>(args: SelectSubset<T, cartsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindFirstArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartsFindFirstArgs>(args?: SelectSubset<T, cartsFindFirstArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindFirstOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartsFindFirstOrThrowArgs>(args?: SelectSubset<T, cartsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.carts.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.carts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartsWithIdOnly = await prisma.carts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cartsFindManyArgs>(args?: SelectSubset<T, cartsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carts.
     * @param {cartsCreateArgs} args - Arguments to create a Carts.
     * @example
     * // Create one Carts
     * const Carts = await prisma.carts.create({
     *   data: {
     *     // ... data to create a Carts
     *   }
     * })
     * 
     */
    create<T extends cartsCreateArgs>(args: SelectSubset<T, cartsCreateArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {cartsCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartsCreateManyArgs>(args?: SelectSubset<T, cartsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {cartsCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartsWithIdOnly = await prisma.carts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cartsCreateManyAndReturnArgs>(args?: SelectSubset<T, cartsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carts.
     * @param {cartsDeleteArgs} args - Arguments to delete one Carts.
     * @example
     * // Delete one Carts
     * const Carts = await prisma.carts.delete({
     *   where: {
     *     // ... filter to delete one Carts
     *   }
     * })
     * 
     */
    delete<T extends cartsDeleteArgs>(args: SelectSubset<T, cartsDeleteArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carts.
     * @param {cartsUpdateArgs} args - Arguments to update one Carts.
     * @example
     * // Update one Carts
     * const carts = await prisma.carts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartsUpdateArgs>(args: SelectSubset<T, cartsUpdateArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {cartsDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.carts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartsDeleteManyArgs>(args?: SelectSubset<T, cartsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartsUpdateManyArgs>(args: SelectSubset<T, cartsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {cartsUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id`
     * const cartsWithIdOnly = await prisma.carts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cartsUpdateManyAndReturnArgs>(args: SelectSubset<T, cartsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carts.
     * @param {cartsUpsertArgs} args - Arguments to update or create a Carts.
     * @example
     * // Update or create a Carts
     * const carts = await prisma.carts.upsert({
     *   create: {
     *     // ... data to create a Carts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carts we want to update
     *   }
     * })
     */
    upsert<T extends cartsUpsertArgs>(args: SelectSubset<T, cartsUpsertArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.carts.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends cartsCountArgs>(
      args?: Subset<T, cartsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartsAggregateArgs>(args: Subset<T, CartsAggregateArgs>): Prisma.PrismaPromise<GetCartsAggregateType<T>>

    /**
     * Group by Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cartsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartsGroupByArgs['orderBy'] }
        : { orderBy?: cartsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cartsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carts model
   */
  readonly fields: cartsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cart_items<T extends carts$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, carts$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the carts model
   */
  interface cartsFieldRefs {
    readonly id: FieldRef<"carts", 'String'>
    readonly created_by: FieldRef<"carts", 'String'>
    readonly status: FieldRef<"carts", 'Status'>
    readonly created_at: FieldRef<"carts", 'DateTime'>
    readonly updated_at: FieldRef<"carts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * carts findUnique
   */
  export type cartsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts findUniqueOrThrow
   */
  export type cartsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts findFirst
   */
  export type cartsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts findFirstOrThrow
   */
  export type cartsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts findMany
   */
  export type cartsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts create
   */
  export type cartsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * The data needed to create a carts.
     */
    data: XOR<cartsCreateInput, cartsUncheckedCreateInput>
  }

  /**
   * carts createMany
   */
  export type cartsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carts.
     */
    data: cartsCreateManyInput | cartsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * carts createManyAndReturn
   */
  export type cartsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * The data used to create many carts.
     */
    data: cartsCreateManyInput | cartsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * carts update
   */
  export type cartsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * The data needed to update a carts.
     */
    data: XOR<cartsUpdateInput, cartsUncheckedUpdateInput>
    /**
     * Choose, which carts to update.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts updateMany
   */
  export type cartsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carts.
     */
    data: XOR<cartsUpdateManyMutationInput, cartsUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartsWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
  }

  /**
   * carts updateManyAndReturn
   */
  export type cartsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * The data used to update carts.
     */
    data: XOR<cartsUpdateManyMutationInput, cartsUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartsWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * carts upsert
   */
  export type cartsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * The filter to search for the carts to update in case it exists.
     */
    where: cartsWhereUniqueInput
    /**
     * In case the carts found by the `where` argument doesn't exist, create a new carts with this data.
     */
    create: XOR<cartsCreateInput, cartsUncheckedCreateInput>
    /**
     * In case the carts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartsUpdateInput, cartsUncheckedUpdateInput>
  }

  /**
   * carts delete
   */
  export type cartsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter which carts to delete.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts deleteMany
   */
  export type cartsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to delete
     */
    where?: cartsWhereInput
    /**
     * Limit how many carts to delete.
     */
    limit?: number
  }

  /**
   * carts.cart_items
   */
  export type carts$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    where?: cart_itemsWhereInput
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    cursor?: cart_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * carts without action
   */
  export type cartsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    created_at: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    created_at: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    user_id: number
    created_at: number
    _all: number
  }


  export type OrdersMinAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: string
    user_id: string
    created_at: Date
    _count: OrdersCountAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    order_lines?: boolean | orders$order_linesArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    id?: boolean
    user_id?: boolean
    created_at?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "created_at", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    order_lines?: boolean | orders$order_linesArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ordersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ordersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      order_lines: Prisma.$order_linesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      created_at: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {ordersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order_lines<T extends orders$order_linesArgs<ExtArgs> = {}>(args?: Subset<T, orders$order_linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'String'>
    readonly user_id: FieldRef<"orders", 'String'>
    readonly created_at: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders updateManyAndReturn
   */
  export type ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.order_lines
   */
  export type orders$order_linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    where?: order_linesWhereInput
    orderBy?: order_linesOrderByWithRelationInput | order_linesOrderByWithRelationInput[]
    cursor?: order_linesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_linesScalarFieldEnum | Order_linesScalarFieldEnum[]
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model social_profiles
   */

  export type AggregateSocial_profiles = {
    _count: Social_profilesCountAggregateOutputType | null
    _min: Social_profilesMinAggregateOutputType | null
    _max: Social_profilesMaxAggregateOutputType | null
  }

  export type Social_profilesMinAggregateOutputType = {
    user_id: string | null
    platform: $Enums.social_platform | null
    platform_user: string | null
    created_at: Date | null
  }

  export type Social_profilesMaxAggregateOutputType = {
    user_id: string | null
    platform: $Enums.social_platform | null
    platform_user: string | null
    created_at: Date | null
  }

  export type Social_profilesCountAggregateOutputType = {
    user_id: number
    platform: number
    platform_user: number
    created_at: number
    _all: number
  }


  export type Social_profilesMinAggregateInputType = {
    user_id?: true
    platform?: true
    platform_user?: true
    created_at?: true
  }

  export type Social_profilesMaxAggregateInputType = {
    user_id?: true
    platform?: true
    platform_user?: true
    created_at?: true
  }

  export type Social_profilesCountAggregateInputType = {
    user_id?: true
    platform?: true
    platform_user?: true
    created_at?: true
    _all?: true
  }

  export type Social_profilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which social_profiles to aggregate.
     */
    where?: social_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of social_profiles to fetch.
     */
    orderBy?: social_profilesOrderByWithRelationInput | social_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: social_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` social_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` social_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned social_profiles
    **/
    _count?: true | Social_profilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Social_profilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Social_profilesMaxAggregateInputType
  }

  export type GetSocial_profilesAggregateType<T extends Social_profilesAggregateArgs> = {
        [P in keyof T & keyof AggregateSocial_profiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocial_profiles[P]>
      : GetScalarType<T[P], AggregateSocial_profiles[P]>
  }




  export type social_profilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: social_profilesWhereInput
    orderBy?: social_profilesOrderByWithAggregationInput | social_profilesOrderByWithAggregationInput[]
    by: Social_profilesScalarFieldEnum[] | Social_profilesScalarFieldEnum
    having?: social_profilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Social_profilesCountAggregateInputType | true
    _min?: Social_profilesMinAggregateInputType
    _max?: Social_profilesMaxAggregateInputType
  }

  export type Social_profilesGroupByOutputType = {
    user_id: string
    platform: $Enums.social_platform
    platform_user: string
    created_at: Date
    _count: Social_profilesCountAggregateOutputType | null
    _min: Social_profilesMinAggregateOutputType | null
    _max: Social_profilesMaxAggregateOutputType | null
  }

  type GetSocial_profilesGroupByPayload<T extends social_profilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Social_profilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Social_profilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Social_profilesGroupByOutputType[P]>
            : GetScalarType<T[P], Social_profilesGroupByOutputType[P]>
        }
      >
    >


  export type social_profilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    platform?: boolean
    platform_user?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["social_profiles"]>

  export type social_profilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    platform?: boolean
    platform_user?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["social_profiles"]>

  export type social_profilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    platform?: boolean
    platform_user?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["social_profiles"]>

  export type social_profilesSelectScalar = {
    user_id?: boolean
    platform?: boolean
    platform_user?: boolean
    created_at?: boolean
  }

  export type social_profilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "platform" | "platform_user" | "created_at", ExtArgs["result"]["social_profiles"]>
  export type social_profilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type social_profilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type social_profilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $social_profilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "social_profiles"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      platform: $Enums.social_platform
      platform_user: string
      created_at: Date
    }, ExtArgs["result"]["social_profiles"]>
    composites: {}
  }

  type social_profilesGetPayload<S extends boolean | null | undefined | social_profilesDefaultArgs> = $Result.GetResult<Prisma.$social_profilesPayload, S>

  type social_profilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<social_profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Social_profilesCountAggregateInputType | true
    }

  export interface social_profilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['social_profiles'], meta: { name: 'social_profiles' } }
    /**
     * Find zero or one Social_profiles that matches the filter.
     * @param {social_profilesFindUniqueArgs} args - Arguments to find a Social_profiles
     * @example
     * // Get one Social_profiles
     * const social_profiles = await prisma.social_profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends social_profilesFindUniqueArgs>(args: SelectSubset<T, social_profilesFindUniqueArgs<ExtArgs>>): Prisma__social_profilesClient<$Result.GetResult<Prisma.$social_profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Social_profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {social_profilesFindUniqueOrThrowArgs} args - Arguments to find a Social_profiles
     * @example
     * // Get one Social_profiles
     * const social_profiles = await prisma.social_profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends social_profilesFindUniqueOrThrowArgs>(args: SelectSubset<T, social_profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__social_profilesClient<$Result.GetResult<Prisma.$social_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Social_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {social_profilesFindFirstArgs} args - Arguments to find a Social_profiles
     * @example
     * // Get one Social_profiles
     * const social_profiles = await prisma.social_profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends social_profilesFindFirstArgs>(args?: SelectSubset<T, social_profilesFindFirstArgs<ExtArgs>>): Prisma__social_profilesClient<$Result.GetResult<Prisma.$social_profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Social_profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {social_profilesFindFirstOrThrowArgs} args - Arguments to find a Social_profiles
     * @example
     * // Get one Social_profiles
     * const social_profiles = await prisma.social_profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends social_profilesFindFirstOrThrowArgs>(args?: SelectSubset<T, social_profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__social_profilesClient<$Result.GetResult<Prisma.$social_profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Social_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {social_profilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Social_profiles
     * const social_profiles = await prisma.social_profiles.findMany()
     * 
     * // Get first 10 Social_profiles
     * const social_profiles = await prisma.social_profiles.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const social_profilesWithUser_idOnly = await prisma.social_profiles.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends social_profilesFindManyArgs>(args?: SelectSubset<T, social_profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$social_profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Social_profiles.
     * @param {social_profilesCreateArgs} args - Arguments to create a Social_profiles.
     * @example
     * // Create one Social_profiles
     * const Social_profiles = await prisma.social_profiles.create({
     *   data: {
     *     // ... data to create a Social_profiles
     *   }
     * })
     * 
     */
    create<T extends social_profilesCreateArgs>(args: SelectSubset<T, social_profilesCreateArgs<ExtArgs>>): Prisma__social_profilesClient<$Result.GetResult<Prisma.$social_profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Social_profiles.
     * @param {social_profilesCreateManyArgs} args - Arguments to create many Social_profiles.
     * @example
     * // Create many Social_profiles
     * const social_profiles = await prisma.social_profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends social_profilesCreateManyArgs>(args?: SelectSubset<T, social_profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Social_profiles and returns the data saved in the database.
     * @param {social_profilesCreateManyAndReturnArgs} args - Arguments to create many Social_profiles.
     * @example
     * // Create many Social_profiles
     * const social_profiles = await prisma.social_profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Social_profiles and only return the `user_id`
     * const social_profilesWithUser_idOnly = await prisma.social_profiles.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends social_profilesCreateManyAndReturnArgs>(args?: SelectSubset<T, social_profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$social_profilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Social_profiles.
     * @param {social_profilesDeleteArgs} args - Arguments to delete one Social_profiles.
     * @example
     * // Delete one Social_profiles
     * const Social_profiles = await prisma.social_profiles.delete({
     *   where: {
     *     // ... filter to delete one Social_profiles
     *   }
     * })
     * 
     */
    delete<T extends social_profilesDeleteArgs>(args: SelectSubset<T, social_profilesDeleteArgs<ExtArgs>>): Prisma__social_profilesClient<$Result.GetResult<Prisma.$social_profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Social_profiles.
     * @param {social_profilesUpdateArgs} args - Arguments to update one Social_profiles.
     * @example
     * // Update one Social_profiles
     * const social_profiles = await prisma.social_profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends social_profilesUpdateArgs>(args: SelectSubset<T, social_profilesUpdateArgs<ExtArgs>>): Prisma__social_profilesClient<$Result.GetResult<Prisma.$social_profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Social_profiles.
     * @param {social_profilesDeleteManyArgs} args - Arguments to filter Social_profiles to delete.
     * @example
     * // Delete a few Social_profiles
     * const { count } = await prisma.social_profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends social_profilesDeleteManyArgs>(args?: SelectSubset<T, social_profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Social_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {social_profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Social_profiles
     * const social_profiles = await prisma.social_profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends social_profilesUpdateManyArgs>(args: SelectSubset<T, social_profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Social_profiles and returns the data updated in the database.
     * @param {social_profilesUpdateManyAndReturnArgs} args - Arguments to update many Social_profiles.
     * @example
     * // Update many Social_profiles
     * const social_profiles = await prisma.social_profiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Social_profiles and only return the `user_id`
     * const social_profilesWithUser_idOnly = await prisma.social_profiles.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends social_profilesUpdateManyAndReturnArgs>(args: SelectSubset<T, social_profilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$social_profilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Social_profiles.
     * @param {social_profilesUpsertArgs} args - Arguments to update or create a Social_profiles.
     * @example
     * // Update or create a Social_profiles
     * const social_profiles = await prisma.social_profiles.upsert({
     *   create: {
     *     // ... data to create a Social_profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Social_profiles we want to update
     *   }
     * })
     */
    upsert<T extends social_profilesUpsertArgs>(args: SelectSubset<T, social_profilesUpsertArgs<ExtArgs>>): Prisma__social_profilesClient<$Result.GetResult<Prisma.$social_profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Social_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {social_profilesCountArgs} args - Arguments to filter Social_profiles to count.
     * @example
     * // Count the number of Social_profiles
     * const count = await prisma.social_profiles.count({
     *   where: {
     *     // ... the filter for the Social_profiles we want to count
     *   }
     * })
    **/
    count<T extends social_profilesCountArgs>(
      args?: Subset<T, social_profilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Social_profilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Social_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Social_profilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Social_profilesAggregateArgs>(args: Subset<T, Social_profilesAggregateArgs>): Prisma.PrismaPromise<GetSocial_profilesAggregateType<T>>

    /**
     * Group by Social_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {social_profilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends social_profilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: social_profilesGroupByArgs['orderBy'] }
        : { orderBy?: social_profilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, social_profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocial_profilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the social_profiles model
   */
  readonly fields: social_profilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for social_profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__social_profilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the social_profiles model
   */
  interface social_profilesFieldRefs {
    readonly user_id: FieldRef<"social_profiles", 'String'>
    readonly platform: FieldRef<"social_profiles", 'social_platform'>
    readonly platform_user: FieldRef<"social_profiles", 'String'>
    readonly created_at: FieldRef<"social_profiles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * social_profiles findUnique
   */
  export type social_profilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_profiles
     */
    select?: social_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_profiles
     */
    omit?: social_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_profilesInclude<ExtArgs> | null
    /**
     * Filter, which social_profiles to fetch.
     */
    where: social_profilesWhereUniqueInput
  }

  /**
   * social_profiles findUniqueOrThrow
   */
  export type social_profilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_profiles
     */
    select?: social_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_profiles
     */
    omit?: social_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_profilesInclude<ExtArgs> | null
    /**
     * Filter, which social_profiles to fetch.
     */
    where: social_profilesWhereUniqueInput
  }

  /**
   * social_profiles findFirst
   */
  export type social_profilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_profiles
     */
    select?: social_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_profiles
     */
    omit?: social_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_profilesInclude<ExtArgs> | null
    /**
     * Filter, which social_profiles to fetch.
     */
    where?: social_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of social_profiles to fetch.
     */
    orderBy?: social_profilesOrderByWithRelationInput | social_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for social_profiles.
     */
    cursor?: social_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` social_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` social_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of social_profiles.
     */
    distinct?: Social_profilesScalarFieldEnum | Social_profilesScalarFieldEnum[]
  }

  /**
   * social_profiles findFirstOrThrow
   */
  export type social_profilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_profiles
     */
    select?: social_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_profiles
     */
    omit?: social_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_profilesInclude<ExtArgs> | null
    /**
     * Filter, which social_profiles to fetch.
     */
    where?: social_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of social_profiles to fetch.
     */
    orderBy?: social_profilesOrderByWithRelationInput | social_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for social_profiles.
     */
    cursor?: social_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` social_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` social_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of social_profiles.
     */
    distinct?: Social_profilesScalarFieldEnum | Social_profilesScalarFieldEnum[]
  }

  /**
   * social_profiles findMany
   */
  export type social_profilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_profiles
     */
    select?: social_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_profiles
     */
    omit?: social_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_profilesInclude<ExtArgs> | null
    /**
     * Filter, which social_profiles to fetch.
     */
    where?: social_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of social_profiles to fetch.
     */
    orderBy?: social_profilesOrderByWithRelationInput | social_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing social_profiles.
     */
    cursor?: social_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` social_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` social_profiles.
     */
    skip?: number
    distinct?: Social_profilesScalarFieldEnum | Social_profilesScalarFieldEnum[]
  }

  /**
   * social_profiles create
   */
  export type social_profilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_profiles
     */
    select?: social_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_profiles
     */
    omit?: social_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_profilesInclude<ExtArgs> | null
    /**
     * The data needed to create a social_profiles.
     */
    data: XOR<social_profilesCreateInput, social_profilesUncheckedCreateInput>
  }

  /**
   * social_profiles createMany
   */
  export type social_profilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many social_profiles.
     */
    data: social_profilesCreateManyInput | social_profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * social_profiles createManyAndReturn
   */
  export type social_profilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_profiles
     */
    select?: social_profilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the social_profiles
     */
    omit?: social_profilesOmit<ExtArgs> | null
    /**
     * The data used to create many social_profiles.
     */
    data: social_profilesCreateManyInput | social_profilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_profilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * social_profiles update
   */
  export type social_profilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_profiles
     */
    select?: social_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_profiles
     */
    omit?: social_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_profilesInclude<ExtArgs> | null
    /**
     * The data needed to update a social_profiles.
     */
    data: XOR<social_profilesUpdateInput, social_profilesUncheckedUpdateInput>
    /**
     * Choose, which social_profiles to update.
     */
    where: social_profilesWhereUniqueInput
  }

  /**
   * social_profiles updateMany
   */
  export type social_profilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update social_profiles.
     */
    data: XOR<social_profilesUpdateManyMutationInput, social_profilesUncheckedUpdateManyInput>
    /**
     * Filter which social_profiles to update
     */
    where?: social_profilesWhereInput
    /**
     * Limit how many social_profiles to update.
     */
    limit?: number
  }

  /**
   * social_profiles updateManyAndReturn
   */
  export type social_profilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_profiles
     */
    select?: social_profilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the social_profiles
     */
    omit?: social_profilesOmit<ExtArgs> | null
    /**
     * The data used to update social_profiles.
     */
    data: XOR<social_profilesUpdateManyMutationInput, social_profilesUncheckedUpdateManyInput>
    /**
     * Filter which social_profiles to update
     */
    where?: social_profilesWhereInput
    /**
     * Limit how many social_profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_profilesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * social_profiles upsert
   */
  export type social_profilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_profiles
     */
    select?: social_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_profiles
     */
    omit?: social_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_profilesInclude<ExtArgs> | null
    /**
     * The filter to search for the social_profiles to update in case it exists.
     */
    where: social_profilesWhereUniqueInput
    /**
     * In case the social_profiles found by the `where` argument doesn't exist, create a new social_profiles with this data.
     */
    create: XOR<social_profilesCreateInput, social_profilesUncheckedCreateInput>
    /**
     * In case the social_profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<social_profilesUpdateInput, social_profilesUncheckedUpdateInput>
  }

  /**
   * social_profiles delete
   */
  export type social_profilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_profiles
     */
    select?: social_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_profiles
     */
    omit?: social_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_profilesInclude<ExtArgs> | null
    /**
     * Filter which social_profiles to delete.
     */
    where: social_profilesWhereUniqueInput
  }

  /**
   * social_profiles deleteMany
   */
  export type social_profilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which social_profiles to delete
     */
    where?: social_profilesWhereInput
    /**
     * Limit how many social_profiles to delete.
     */
    limit?: number
  }

  /**
   * social_profiles without action
   */
  export type social_profilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_profiles
     */
    select?: social_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the social_profiles
     */
    omit?: social_profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: social_profilesInclude<ExtArgs> | null
  }


  /**
   * Model credentials
   */

  export type AggregateCredentials = {
    _count: CredentialsCountAggregateOutputType | null
    _min: CredentialsMinAggregateOutputType | null
    _max: CredentialsMaxAggregateOutputType | null
  }

  export type CredentialsMinAggregateOutputType = {
    provider_id: $Enums.provider | null
    provider_key: string | null
    user_id: string | null
    hasher: $Enums.hash_method | null
    password_hash: string | null
    password_salt: string | null
  }

  export type CredentialsMaxAggregateOutputType = {
    provider_id: $Enums.provider | null
    provider_key: string | null
    user_id: string | null
    hasher: $Enums.hash_method | null
    password_hash: string | null
    password_salt: string | null
  }

  export type CredentialsCountAggregateOutputType = {
    provider_id: number
    provider_key: number
    user_id: number
    hasher: number
    password_hash: number
    password_salt: number
    _all: number
  }


  export type CredentialsMinAggregateInputType = {
    provider_id?: true
    provider_key?: true
    user_id?: true
    hasher?: true
    password_hash?: true
    password_salt?: true
  }

  export type CredentialsMaxAggregateInputType = {
    provider_id?: true
    provider_key?: true
    user_id?: true
    hasher?: true
    password_hash?: true
    password_salt?: true
  }

  export type CredentialsCountAggregateInputType = {
    provider_id?: true
    provider_key?: true
    user_id?: true
    hasher?: true
    password_hash?: true
    password_salt?: true
    _all?: true
  }

  export type CredentialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which credentials to aggregate.
     */
    where?: credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credentials to fetch.
     */
    orderBy?: credentialsOrderByWithRelationInput | credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned credentials
    **/
    _count?: true | CredentialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CredentialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CredentialsMaxAggregateInputType
  }

  export type GetCredentialsAggregateType<T extends CredentialsAggregateArgs> = {
        [P in keyof T & keyof AggregateCredentials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredentials[P]>
      : GetScalarType<T[P], AggregateCredentials[P]>
  }




  export type credentialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: credentialsWhereInput
    orderBy?: credentialsOrderByWithAggregationInput | credentialsOrderByWithAggregationInput[]
    by: CredentialsScalarFieldEnum[] | CredentialsScalarFieldEnum
    having?: credentialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CredentialsCountAggregateInputType | true
    _min?: CredentialsMinAggregateInputType
    _max?: CredentialsMaxAggregateInputType
  }

  export type CredentialsGroupByOutputType = {
    provider_id: $Enums.provider
    provider_key: string
    user_id: string
    hasher: $Enums.hash_method
    password_hash: string
    password_salt: string
    _count: CredentialsCountAggregateOutputType | null
    _min: CredentialsMinAggregateOutputType | null
    _max: CredentialsMaxAggregateOutputType | null
  }

  type GetCredentialsGroupByPayload<T extends credentialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CredentialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CredentialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CredentialsGroupByOutputType[P]>
            : GetScalarType<T[P], CredentialsGroupByOutputType[P]>
        }
      >
    >


  export type credentialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    provider_id?: boolean
    provider_key?: boolean
    user_id?: boolean
    hasher?: boolean
    password_hash?: boolean
    password_salt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credentials"]>

  export type credentialsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    provider_id?: boolean
    provider_key?: boolean
    user_id?: boolean
    hasher?: boolean
    password_hash?: boolean
    password_salt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credentials"]>

  export type credentialsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    provider_id?: boolean
    provider_key?: boolean
    user_id?: boolean
    hasher?: boolean
    password_hash?: boolean
    password_salt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credentials"]>

  export type credentialsSelectScalar = {
    provider_id?: boolean
    provider_key?: boolean
    user_id?: boolean
    hasher?: boolean
    password_hash?: boolean
    password_salt?: boolean
  }

  export type credentialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"provider_id" | "provider_key" | "user_id" | "hasher" | "password_hash" | "password_salt", ExtArgs["result"]["credentials"]>
  export type credentialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type credentialsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type credentialsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $credentialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "credentials"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      provider_id: $Enums.provider
      provider_key: string
      user_id: string
      hasher: $Enums.hash_method
      password_hash: string
      password_salt: string
    }, ExtArgs["result"]["credentials"]>
    composites: {}
  }

  type credentialsGetPayload<S extends boolean | null | undefined | credentialsDefaultArgs> = $Result.GetResult<Prisma.$credentialsPayload, S>

  type credentialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<credentialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CredentialsCountAggregateInputType | true
    }

  export interface credentialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['credentials'], meta: { name: 'credentials' } }
    /**
     * Find zero or one Credentials that matches the filter.
     * @param {credentialsFindUniqueArgs} args - Arguments to find a Credentials
     * @example
     * // Get one Credentials
     * const credentials = await prisma.credentials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends credentialsFindUniqueArgs>(args: SelectSubset<T, credentialsFindUniqueArgs<ExtArgs>>): Prisma__credentialsClient<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Credentials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {credentialsFindUniqueOrThrowArgs} args - Arguments to find a Credentials
     * @example
     * // Get one Credentials
     * const credentials = await prisma.credentials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends credentialsFindUniqueOrThrowArgs>(args: SelectSubset<T, credentialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__credentialsClient<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialsFindFirstArgs} args - Arguments to find a Credentials
     * @example
     * // Get one Credentials
     * const credentials = await prisma.credentials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends credentialsFindFirstArgs>(args?: SelectSubset<T, credentialsFindFirstArgs<ExtArgs>>): Prisma__credentialsClient<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credentials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialsFindFirstOrThrowArgs} args - Arguments to find a Credentials
     * @example
     * // Get one Credentials
     * const credentials = await prisma.credentials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends credentialsFindFirstOrThrowArgs>(args?: SelectSubset<T, credentialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__credentialsClient<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credentials
     * const credentials = await prisma.credentials.findMany()
     * 
     * // Get first 10 Credentials
     * const credentials = await prisma.credentials.findMany({ take: 10 })
     * 
     * // Only select the `provider_key`
     * const credentialsWithProvider_keyOnly = await prisma.credentials.findMany({ select: { provider_key: true } })
     * 
     */
    findMany<T extends credentialsFindManyArgs>(args?: SelectSubset<T, credentialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Credentials.
     * @param {credentialsCreateArgs} args - Arguments to create a Credentials.
     * @example
     * // Create one Credentials
     * const Credentials = await prisma.credentials.create({
     *   data: {
     *     // ... data to create a Credentials
     *   }
     * })
     * 
     */
    create<T extends credentialsCreateArgs>(args: SelectSubset<T, credentialsCreateArgs<ExtArgs>>): Prisma__credentialsClient<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Credentials.
     * @param {credentialsCreateManyArgs} args - Arguments to create many Credentials.
     * @example
     * // Create many Credentials
     * const credentials = await prisma.credentials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends credentialsCreateManyArgs>(args?: SelectSubset<T, credentialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Credentials and returns the data saved in the database.
     * @param {credentialsCreateManyAndReturnArgs} args - Arguments to create many Credentials.
     * @example
     * // Create many Credentials
     * const credentials = await prisma.credentials.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Credentials and only return the `provider_key`
     * const credentialsWithProvider_keyOnly = await prisma.credentials.createManyAndReturn({
     *   select: { provider_key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends credentialsCreateManyAndReturnArgs>(args?: SelectSubset<T, credentialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Credentials.
     * @param {credentialsDeleteArgs} args - Arguments to delete one Credentials.
     * @example
     * // Delete one Credentials
     * const Credentials = await prisma.credentials.delete({
     *   where: {
     *     // ... filter to delete one Credentials
     *   }
     * })
     * 
     */
    delete<T extends credentialsDeleteArgs>(args: SelectSubset<T, credentialsDeleteArgs<ExtArgs>>): Prisma__credentialsClient<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Credentials.
     * @param {credentialsUpdateArgs} args - Arguments to update one Credentials.
     * @example
     * // Update one Credentials
     * const credentials = await prisma.credentials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends credentialsUpdateArgs>(args: SelectSubset<T, credentialsUpdateArgs<ExtArgs>>): Prisma__credentialsClient<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Credentials.
     * @param {credentialsDeleteManyArgs} args - Arguments to filter Credentials to delete.
     * @example
     * // Delete a few Credentials
     * const { count } = await prisma.credentials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends credentialsDeleteManyArgs>(args?: SelectSubset<T, credentialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credentials
     * const credentials = await prisma.credentials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends credentialsUpdateManyArgs>(args: SelectSubset<T, credentialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credentials and returns the data updated in the database.
     * @param {credentialsUpdateManyAndReturnArgs} args - Arguments to update many Credentials.
     * @example
     * // Update many Credentials
     * const credentials = await prisma.credentials.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Credentials and only return the `provider_key`
     * const credentialsWithProvider_keyOnly = await prisma.credentials.updateManyAndReturn({
     *   select: { provider_key: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends credentialsUpdateManyAndReturnArgs>(args: SelectSubset<T, credentialsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Credentials.
     * @param {credentialsUpsertArgs} args - Arguments to update or create a Credentials.
     * @example
     * // Update or create a Credentials
     * const credentials = await prisma.credentials.upsert({
     *   create: {
     *     // ... data to create a Credentials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credentials we want to update
     *   }
     * })
     */
    upsert<T extends credentialsUpsertArgs>(args: SelectSubset<T, credentialsUpsertArgs<ExtArgs>>): Prisma__credentialsClient<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialsCountArgs} args - Arguments to filter Credentials to count.
     * @example
     * // Count the number of Credentials
     * const count = await prisma.credentials.count({
     *   where: {
     *     // ... the filter for the Credentials we want to count
     *   }
     * })
    **/
    count<T extends credentialsCountArgs>(
      args?: Subset<T, credentialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CredentialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CredentialsAggregateArgs>(args: Subset<T, CredentialsAggregateArgs>): Prisma.PrismaPromise<GetCredentialsAggregateType<T>>

    /**
     * Group by Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends credentialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: credentialsGroupByArgs['orderBy'] }
        : { orderBy?: credentialsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, credentialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredentialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the credentials model
   */
  readonly fields: credentialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for credentials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__credentialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the credentials model
   */
  interface credentialsFieldRefs {
    readonly provider_id: FieldRef<"credentials", 'provider'>
    readonly provider_key: FieldRef<"credentials", 'String'>
    readonly user_id: FieldRef<"credentials", 'String'>
    readonly hasher: FieldRef<"credentials", 'hash_method'>
    readonly password_hash: FieldRef<"credentials", 'String'>
    readonly password_salt: FieldRef<"credentials", 'String'>
  }
    

  // Custom InputTypes
  /**
   * credentials findUnique
   */
  export type credentialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credentialsInclude<ExtArgs> | null
    /**
     * Filter, which credentials to fetch.
     */
    where: credentialsWhereUniqueInput
  }

  /**
   * credentials findUniqueOrThrow
   */
  export type credentialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credentialsInclude<ExtArgs> | null
    /**
     * Filter, which credentials to fetch.
     */
    where: credentialsWhereUniqueInput
  }

  /**
   * credentials findFirst
   */
  export type credentialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credentialsInclude<ExtArgs> | null
    /**
     * Filter, which credentials to fetch.
     */
    where?: credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credentials to fetch.
     */
    orderBy?: credentialsOrderByWithRelationInput | credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for credentials.
     */
    cursor?: credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of credentials.
     */
    distinct?: CredentialsScalarFieldEnum | CredentialsScalarFieldEnum[]
  }

  /**
   * credentials findFirstOrThrow
   */
  export type credentialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credentialsInclude<ExtArgs> | null
    /**
     * Filter, which credentials to fetch.
     */
    where?: credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credentials to fetch.
     */
    orderBy?: credentialsOrderByWithRelationInput | credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for credentials.
     */
    cursor?: credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of credentials.
     */
    distinct?: CredentialsScalarFieldEnum | CredentialsScalarFieldEnum[]
  }

  /**
   * credentials findMany
   */
  export type credentialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credentialsInclude<ExtArgs> | null
    /**
     * Filter, which credentials to fetch.
     */
    where?: credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credentials to fetch.
     */
    orderBy?: credentialsOrderByWithRelationInput | credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing credentials.
     */
    cursor?: credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credentials.
     */
    skip?: number
    distinct?: CredentialsScalarFieldEnum | CredentialsScalarFieldEnum[]
  }

  /**
   * credentials create
   */
  export type credentialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credentialsInclude<ExtArgs> | null
    /**
     * The data needed to create a credentials.
     */
    data: XOR<credentialsCreateInput, credentialsUncheckedCreateInput>
  }

  /**
   * credentials createMany
   */
  export type credentialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many credentials.
     */
    data: credentialsCreateManyInput | credentialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * credentials createManyAndReturn
   */
  export type credentialsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * The data used to create many credentials.
     */
    data: credentialsCreateManyInput | credentialsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credentialsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * credentials update
   */
  export type credentialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credentialsInclude<ExtArgs> | null
    /**
     * The data needed to update a credentials.
     */
    data: XOR<credentialsUpdateInput, credentialsUncheckedUpdateInput>
    /**
     * Choose, which credentials to update.
     */
    where: credentialsWhereUniqueInput
  }

  /**
   * credentials updateMany
   */
  export type credentialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update credentials.
     */
    data: XOR<credentialsUpdateManyMutationInput, credentialsUncheckedUpdateManyInput>
    /**
     * Filter which credentials to update
     */
    where?: credentialsWhereInput
    /**
     * Limit how many credentials to update.
     */
    limit?: number
  }

  /**
   * credentials updateManyAndReturn
   */
  export type credentialsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * The data used to update credentials.
     */
    data: XOR<credentialsUpdateManyMutationInput, credentialsUncheckedUpdateManyInput>
    /**
     * Filter which credentials to update
     */
    where?: credentialsWhereInput
    /**
     * Limit how many credentials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credentialsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * credentials upsert
   */
  export type credentialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credentialsInclude<ExtArgs> | null
    /**
     * The filter to search for the credentials to update in case it exists.
     */
    where: credentialsWhereUniqueInput
    /**
     * In case the credentials found by the `where` argument doesn't exist, create a new credentials with this data.
     */
    create: XOR<credentialsCreateInput, credentialsUncheckedCreateInput>
    /**
     * In case the credentials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<credentialsUpdateInput, credentialsUncheckedUpdateInput>
  }

  /**
   * credentials delete
   */
  export type credentialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credentialsInclude<ExtArgs> | null
    /**
     * Filter which credentials to delete.
     */
    where: credentialsWhereUniqueInput
  }

  /**
   * credentials deleteMany
   */
  export type credentialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which credentials to delete
     */
    where?: credentialsWhereInput
    /**
     * Limit how many credentials to delete.
     */
    limit?: number
  }

  /**
   * credentials without action
   */
  export type credentialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: credentialsInclude<ExtArgs> | null
  }


  /**
   * Model cart_items
   */

  export type AggregateCart_items = {
    _count: Cart_itemsCountAggregateOutputType | null
    _avg: Cart_itemsAvgAggregateOutputType | null
    _sum: Cart_itemsSumAggregateOutputType | null
    _min: Cart_itemsMinAggregateOutputType | null
    _max: Cart_itemsMaxAggregateOutputType | null
  }

  export type Cart_itemsAvgAggregateOutputType = {
    price: number | null
    quantity: number | null
  }

  export type Cart_itemsSumAggregateOutputType = {
    price: number | null
    quantity: number | null
  }

  export type Cart_itemsMinAggregateOutputType = {
    cart_id: string | null
    product_id: string | null
    price: number | null
    quantity: number | null
    created_at: Date | null
    userId: string | null
  }

  export type Cart_itemsMaxAggregateOutputType = {
    cart_id: string | null
    product_id: string | null
    price: number | null
    quantity: number | null
    created_at: Date | null
    userId: string | null
  }

  export type Cart_itemsCountAggregateOutputType = {
    cart_id: number
    product_id: number
    price: number
    quantity: number
    created_at: number
    userId: number
    _all: number
  }


  export type Cart_itemsAvgAggregateInputType = {
    price?: true
    quantity?: true
  }

  export type Cart_itemsSumAggregateInputType = {
    price?: true
    quantity?: true
  }

  export type Cart_itemsMinAggregateInputType = {
    cart_id?: true
    product_id?: true
    price?: true
    quantity?: true
    created_at?: true
    userId?: true
  }

  export type Cart_itemsMaxAggregateInputType = {
    cart_id?: true
    product_id?: true
    price?: true
    quantity?: true
    created_at?: true
    userId?: true
  }

  export type Cart_itemsCountAggregateInputType = {
    cart_id?: true
    product_id?: true
    price?: true
    quantity?: true
    created_at?: true
    userId?: true
    _all?: true
  }

  export type Cart_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart_items to aggregate.
     */
    where?: cart_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cart_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cart_items
    **/
    _count?: true | Cart_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cart_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cart_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cart_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cart_itemsMaxAggregateInputType
  }

  export type GetCart_itemsAggregateType<T extends Cart_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateCart_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart_items[P]>
      : GetScalarType<T[P], AggregateCart_items[P]>
  }




  export type cart_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_itemsWhereInput
    orderBy?: cart_itemsOrderByWithAggregationInput | cart_itemsOrderByWithAggregationInput[]
    by: Cart_itemsScalarFieldEnum[] | Cart_itemsScalarFieldEnum
    having?: cart_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cart_itemsCountAggregateInputType | true
    _avg?: Cart_itemsAvgAggregateInputType
    _sum?: Cart_itemsSumAggregateInputType
    _min?: Cart_itemsMinAggregateInputType
    _max?: Cart_itemsMaxAggregateInputType
  }

  export type Cart_itemsGroupByOutputType = {
    cart_id: string
    product_id: string
    price: number
    quantity: number
    created_at: Date
    userId: string | null
    _count: Cart_itemsCountAggregateOutputType | null
    _avg: Cart_itemsAvgAggregateOutputType | null
    _sum: Cart_itemsSumAggregateOutputType | null
    _min: Cart_itemsMinAggregateOutputType | null
    _max: Cart_itemsMaxAggregateOutputType | null
  }

  type GetCart_itemsGroupByPayload<T extends cart_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cart_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cart_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cart_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Cart_itemsGroupByOutputType[P]>
        }
      >
    >


  export type cart_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_id?: boolean
    product_id?: boolean
    price?: boolean
    quantity?: boolean
    created_at?: boolean
    userId?: boolean
    cart?: boolean | cartsDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
    User?: boolean | cart_items$UserArgs<ExtArgs>
  }, ExtArgs["result"]["cart_items"]>

  export type cart_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_id?: boolean
    product_id?: boolean
    price?: boolean
    quantity?: boolean
    created_at?: boolean
    userId?: boolean
    cart?: boolean | cartsDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
    User?: boolean | cart_items$UserArgs<ExtArgs>
  }, ExtArgs["result"]["cart_items"]>

  export type cart_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_id?: boolean
    product_id?: boolean
    price?: boolean
    quantity?: boolean
    created_at?: boolean
    userId?: boolean
    cart?: boolean | cartsDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
    User?: boolean | cart_items$UserArgs<ExtArgs>
  }, ExtArgs["result"]["cart_items"]>

  export type cart_itemsSelectScalar = {
    cart_id?: boolean
    product_id?: boolean
    price?: boolean
    quantity?: boolean
    created_at?: boolean
    userId?: boolean
  }

  export type cart_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cart_id" | "product_id" | "price" | "quantity" | "created_at" | "userId", ExtArgs["result"]["cart_items"]>
  export type cart_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | cartsDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
    User?: boolean | cart_items$UserArgs<ExtArgs>
  }
  export type cart_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | cartsDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
    User?: boolean | cart_items$UserArgs<ExtArgs>
  }
  export type cart_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | cartsDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
    User?: boolean | cart_items$UserArgs<ExtArgs>
  }

  export type $cart_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cart_items"
    objects: {
      cart: Prisma.$cartsPayload<ExtArgs>
      product: Prisma.$productsPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      cart_id: string
      product_id: string
      price: number
      quantity: number
      created_at: Date
      userId: string | null
    }, ExtArgs["result"]["cart_items"]>
    composites: {}
  }

  type cart_itemsGetPayload<S extends boolean | null | undefined | cart_itemsDefaultArgs> = $Result.GetResult<Prisma.$cart_itemsPayload, S>

  type cart_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cart_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cart_itemsCountAggregateInputType | true
    }

  export interface cart_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cart_items'], meta: { name: 'cart_items' } }
    /**
     * Find zero or one Cart_items that matches the filter.
     * @param {cart_itemsFindUniqueArgs} args - Arguments to find a Cart_items
     * @example
     * // Get one Cart_items
     * const cart_items = await prisma.cart_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cart_itemsFindUniqueArgs>(args: SelectSubset<T, cart_itemsFindUniqueArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cart_itemsFindUniqueOrThrowArgs} args - Arguments to find a Cart_items
     * @example
     * // Get one Cart_items
     * const cart_items = await prisma.cart_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cart_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, cart_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsFindFirstArgs} args - Arguments to find a Cart_items
     * @example
     * // Get one Cart_items
     * const cart_items = await prisma.cart_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cart_itemsFindFirstArgs>(args?: SelectSubset<T, cart_itemsFindFirstArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsFindFirstOrThrowArgs} args - Arguments to find a Cart_items
     * @example
     * // Get one Cart_items
     * const cart_items = await prisma.cart_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cart_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, cart_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cart_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cart_items
     * const cart_items = await prisma.cart_items.findMany()
     * 
     * // Get first 10 Cart_items
     * const cart_items = await prisma.cart_items.findMany({ take: 10 })
     * 
     * // Only select the `cart_id`
     * const cart_itemsWithCart_idOnly = await prisma.cart_items.findMany({ select: { cart_id: true } })
     * 
     */
    findMany<T extends cart_itemsFindManyArgs>(args?: SelectSubset<T, cart_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart_items.
     * @param {cart_itemsCreateArgs} args - Arguments to create a Cart_items.
     * @example
     * // Create one Cart_items
     * const Cart_items = await prisma.cart_items.create({
     *   data: {
     *     // ... data to create a Cart_items
     *   }
     * })
     * 
     */
    create<T extends cart_itemsCreateArgs>(args: SelectSubset<T, cart_itemsCreateArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cart_items.
     * @param {cart_itemsCreateManyArgs} args - Arguments to create many Cart_items.
     * @example
     * // Create many Cart_items
     * const cart_items = await prisma.cart_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cart_itemsCreateManyArgs>(args?: SelectSubset<T, cart_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cart_items and returns the data saved in the database.
     * @param {cart_itemsCreateManyAndReturnArgs} args - Arguments to create many Cart_items.
     * @example
     * // Create many Cart_items
     * const cart_items = await prisma.cart_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cart_items and only return the `cart_id`
     * const cart_itemsWithCart_idOnly = await prisma.cart_items.createManyAndReturn({
     *   select: { cart_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cart_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, cart_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart_items.
     * @param {cart_itemsDeleteArgs} args - Arguments to delete one Cart_items.
     * @example
     * // Delete one Cart_items
     * const Cart_items = await prisma.cart_items.delete({
     *   where: {
     *     // ... filter to delete one Cart_items
     *   }
     * })
     * 
     */
    delete<T extends cart_itemsDeleteArgs>(args: SelectSubset<T, cart_itemsDeleteArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart_items.
     * @param {cart_itemsUpdateArgs} args - Arguments to update one Cart_items.
     * @example
     * // Update one Cart_items
     * const cart_items = await prisma.cart_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cart_itemsUpdateArgs>(args: SelectSubset<T, cart_itemsUpdateArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cart_items.
     * @param {cart_itemsDeleteManyArgs} args - Arguments to filter Cart_items to delete.
     * @example
     * // Delete a few Cart_items
     * const { count } = await prisma.cart_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cart_itemsDeleteManyArgs>(args?: SelectSubset<T, cart_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cart_items
     * const cart_items = await prisma.cart_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cart_itemsUpdateManyArgs>(args: SelectSubset<T, cart_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cart_items and returns the data updated in the database.
     * @param {cart_itemsUpdateManyAndReturnArgs} args - Arguments to update many Cart_items.
     * @example
     * // Update many Cart_items
     * const cart_items = await prisma.cart_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cart_items and only return the `cart_id`
     * const cart_itemsWithCart_idOnly = await prisma.cart_items.updateManyAndReturn({
     *   select: { cart_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cart_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, cart_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart_items.
     * @param {cart_itemsUpsertArgs} args - Arguments to update or create a Cart_items.
     * @example
     * // Update or create a Cart_items
     * const cart_items = await prisma.cart_items.upsert({
     *   create: {
     *     // ... data to create a Cart_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart_items we want to update
     *   }
     * })
     */
    upsert<T extends cart_itemsUpsertArgs>(args: SelectSubset<T, cart_itemsUpsertArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsCountArgs} args - Arguments to filter Cart_items to count.
     * @example
     * // Count the number of Cart_items
     * const count = await prisma.cart_items.count({
     *   where: {
     *     // ... the filter for the Cart_items we want to count
     *   }
     * })
    **/
    count<T extends cart_itemsCountArgs>(
      args?: Subset<T, cart_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cart_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cart_itemsAggregateArgs>(args: Subset<T, Cart_itemsAggregateArgs>): Prisma.PrismaPromise<GetCart_itemsAggregateType<T>>

    /**
     * Group by Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cart_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cart_itemsGroupByArgs['orderBy'] }
        : { orderBy?: cart_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cart_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCart_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cart_items model
   */
  readonly fields: cart_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cart_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cart_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends cartsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cartsDefaultArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends cart_items$UserArgs<ExtArgs> = {}>(args?: Subset<T, cart_items$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cart_items model
   */
  interface cart_itemsFieldRefs {
    readonly cart_id: FieldRef<"cart_items", 'String'>
    readonly product_id: FieldRef<"cart_items", 'String'>
    readonly price: FieldRef<"cart_items", 'Float'>
    readonly quantity: FieldRef<"cart_items", 'Int'>
    readonly created_at: FieldRef<"cart_items", 'DateTime'>
    readonly userId: FieldRef<"cart_items", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cart_items findUnique
   */
  export type cart_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where: cart_itemsWhereUniqueInput
  }

  /**
   * cart_items findUniqueOrThrow
   */
  export type cart_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where: cart_itemsWhereUniqueInput
  }

  /**
   * cart_items findFirst
   */
  export type cart_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where?: cart_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cart_items.
     */
    cursor?: cart_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cart_items.
     */
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * cart_items findFirstOrThrow
   */
  export type cart_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where?: cart_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cart_items.
     */
    cursor?: cart_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cart_items.
     */
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * cart_items findMany
   */
  export type cart_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where?: cart_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cart_items.
     */
    cursor?: cart_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * cart_items create
   */
  export type cart_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a cart_items.
     */
    data: XOR<cart_itemsCreateInput, cart_itemsUncheckedCreateInput>
  }

  /**
   * cart_items createMany
   */
  export type cart_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cart_items.
     */
    data: cart_itemsCreateManyInput | cart_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cart_items createManyAndReturn
   */
  export type cart_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many cart_items.
     */
    data: cart_itemsCreateManyInput | cart_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cart_items update
   */
  export type cart_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a cart_items.
     */
    data: XOR<cart_itemsUpdateInput, cart_itemsUncheckedUpdateInput>
    /**
     * Choose, which cart_items to update.
     */
    where: cart_itemsWhereUniqueInput
  }

  /**
   * cart_items updateMany
   */
  export type cart_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cart_items.
     */
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyInput>
    /**
     * Filter which cart_items to update
     */
    where?: cart_itemsWhereInput
    /**
     * Limit how many cart_items to update.
     */
    limit?: number
  }

  /**
   * cart_items updateManyAndReturn
   */
  export type cart_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * The data used to update cart_items.
     */
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyInput>
    /**
     * Filter which cart_items to update
     */
    where?: cart_itemsWhereInput
    /**
     * Limit how many cart_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cart_items upsert
   */
  export type cart_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the cart_items to update in case it exists.
     */
    where: cart_itemsWhereUniqueInput
    /**
     * In case the cart_items found by the `where` argument doesn't exist, create a new cart_items with this data.
     */
    create: XOR<cart_itemsCreateInput, cart_itemsUncheckedCreateInput>
    /**
     * In case the cart_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cart_itemsUpdateInput, cart_itemsUncheckedUpdateInput>
  }

  /**
   * cart_items delete
   */
  export type cart_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter which cart_items to delete.
     */
    where: cart_itemsWhereUniqueInput
  }

  /**
   * cart_items deleteMany
   */
  export type cart_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart_items to delete
     */
    where?: cart_itemsWhereInput
    /**
     * Limit how many cart_items to delete.
     */
    limit?: number
  }

  /**
   * cart_items.User
   */
  export type cart_items$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * cart_items without action
   */
  export type cart_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type ProductsMinAggregateInputType = {
    id?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: string
    _count: ProductsCountAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart_items?: boolean | products$cart_itemsArgs<ExtArgs>
    order_lines?: boolean | products$order_linesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | products$cart_itemsArgs<ExtArgs>
    order_lines?: boolean | products$order_linesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      cart_items: Prisma.$cart_itemsPayload<ExtArgs>[]
      order_lines: Prisma.$order_linesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart_items<T extends products$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, products$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_lines<T extends products$order_linesArgs<ExtArgs> = {}>(args?: Subset<T, products$order_linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'String'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data?: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.cart_items
   */
  export type products$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    where?: cart_itemsWhereInput
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    cursor?: cart_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * products.order_lines
   */
  export type products$order_linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    where?: order_linesWhereInput
    orderBy?: order_linesOrderByWithRelationInput | order_linesOrderByWithRelationInput[]
    cursor?: order_linesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_linesScalarFieldEnum | Order_linesScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model order_lines
   */

  export type AggregateOrder_lines = {
    _count: Order_linesCountAggregateOutputType | null
    _avg: Order_linesAvgAggregateOutputType | null
    _sum: Order_linesSumAggregateOutputType | null
    _min: Order_linesMinAggregateOutputType | null
    _max: Order_linesMaxAggregateOutputType | null
  }

  export type Order_linesAvgAggregateOutputType = {
    price: number | null
    quantity: number | null
  }

  export type Order_linesSumAggregateOutputType = {
    price: number | null
    quantity: number | null
  }

  export type Order_linesMinAggregateOutputType = {
    id: string | null
    order_id: string | null
    product_id: string | null
    price: number | null
    quantity: number | null
  }

  export type Order_linesMaxAggregateOutputType = {
    id: string | null
    order_id: string | null
    product_id: string | null
    price: number | null
    quantity: number | null
  }

  export type Order_linesCountAggregateOutputType = {
    id: number
    order_id: number
    product_id: number
    price: number
    quantity: number
    _all: number
  }


  export type Order_linesAvgAggregateInputType = {
    price?: true
    quantity?: true
  }

  export type Order_linesSumAggregateInputType = {
    price?: true
    quantity?: true
  }

  export type Order_linesMinAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    price?: true
    quantity?: true
  }

  export type Order_linesMaxAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    price?: true
    quantity?: true
  }

  export type Order_linesCountAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    price?: true
    quantity?: true
    _all?: true
  }

  export type Order_linesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_lines to aggregate.
     */
    where?: order_linesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_lines to fetch.
     */
    orderBy?: order_linesOrderByWithRelationInput | order_linesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_linesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_lines
    **/
    _count?: true | Order_linesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_linesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_linesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_linesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_linesMaxAggregateInputType
  }

  export type GetOrder_linesAggregateType<T extends Order_linesAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_lines]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_lines[P]>
      : GetScalarType<T[P], AggregateOrder_lines[P]>
  }




  export type order_linesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_linesWhereInput
    orderBy?: order_linesOrderByWithAggregationInput | order_linesOrderByWithAggregationInput[]
    by: Order_linesScalarFieldEnum[] | Order_linesScalarFieldEnum
    having?: order_linesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_linesCountAggregateInputType | true
    _avg?: Order_linesAvgAggregateInputType
    _sum?: Order_linesSumAggregateInputType
    _min?: Order_linesMinAggregateInputType
    _max?: Order_linesMaxAggregateInputType
  }

  export type Order_linesGroupByOutputType = {
    id: string
    order_id: string
    product_id: string
    price: number
    quantity: number
    _count: Order_linesCountAggregateOutputType | null
    _avg: Order_linesAvgAggregateOutputType | null
    _sum: Order_linesSumAggregateOutputType | null
    _min: Order_linesMinAggregateOutputType | null
    _max: Order_linesMaxAggregateOutputType | null
  }

  type GetOrder_linesGroupByPayload<T extends order_linesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_linesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_linesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_linesGroupByOutputType[P]>
            : GetScalarType<T[P], Order_linesGroupByOutputType[P]>
        }
      >
    >


  export type order_linesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    price?: boolean
    quantity?: boolean
    order?: boolean | ordersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_lines"]>

  export type order_linesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    price?: boolean
    quantity?: boolean
    order?: boolean | ordersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_lines"]>

  export type order_linesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    price?: boolean
    quantity?: boolean
    order?: boolean | ordersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_lines"]>

  export type order_linesSelectScalar = {
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    price?: boolean
    quantity?: boolean
  }

  export type order_linesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "product_id" | "price" | "quantity", ExtArgs["result"]["order_lines"]>
  export type order_linesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ordersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type order_linesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ordersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type order_linesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ordersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $order_linesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_lines"
    objects: {
      order: Prisma.$ordersPayload<ExtArgs>
      product: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_id: string
      product_id: string
      price: number
      quantity: number
    }, ExtArgs["result"]["order_lines"]>
    composites: {}
  }

  type order_linesGetPayload<S extends boolean | null | undefined | order_linesDefaultArgs> = $Result.GetResult<Prisma.$order_linesPayload, S>

  type order_linesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_linesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_linesCountAggregateInputType | true
    }

  export interface order_linesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_lines'], meta: { name: 'order_lines' } }
    /**
     * Find zero or one Order_lines that matches the filter.
     * @param {order_linesFindUniqueArgs} args - Arguments to find a Order_lines
     * @example
     * // Get one Order_lines
     * const order_lines = await prisma.order_lines.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_linesFindUniqueArgs>(args: SelectSubset<T, order_linesFindUniqueArgs<ExtArgs>>): Prisma__order_linesClient<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_lines that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_linesFindUniqueOrThrowArgs} args - Arguments to find a Order_lines
     * @example
     * // Get one Order_lines
     * const order_lines = await prisma.order_lines.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_linesFindUniqueOrThrowArgs>(args: SelectSubset<T, order_linesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_linesClient<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_lines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_linesFindFirstArgs} args - Arguments to find a Order_lines
     * @example
     * // Get one Order_lines
     * const order_lines = await prisma.order_lines.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_linesFindFirstArgs>(args?: SelectSubset<T, order_linesFindFirstArgs<ExtArgs>>): Prisma__order_linesClient<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_lines that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_linesFindFirstOrThrowArgs} args - Arguments to find a Order_lines
     * @example
     * // Get one Order_lines
     * const order_lines = await prisma.order_lines.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_linesFindFirstOrThrowArgs>(args?: SelectSubset<T, order_linesFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_linesClient<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_lines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_linesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_lines
     * const order_lines = await prisma.order_lines.findMany()
     * 
     * // Get first 10 Order_lines
     * const order_lines = await prisma.order_lines.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_linesWithIdOnly = await prisma.order_lines.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_linesFindManyArgs>(args?: SelectSubset<T, order_linesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_lines.
     * @param {order_linesCreateArgs} args - Arguments to create a Order_lines.
     * @example
     * // Create one Order_lines
     * const Order_lines = await prisma.order_lines.create({
     *   data: {
     *     // ... data to create a Order_lines
     *   }
     * })
     * 
     */
    create<T extends order_linesCreateArgs>(args: SelectSubset<T, order_linesCreateArgs<ExtArgs>>): Prisma__order_linesClient<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_lines.
     * @param {order_linesCreateManyArgs} args - Arguments to create many Order_lines.
     * @example
     * // Create many Order_lines
     * const order_lines = await prisma.order_lines.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_linesCreateManyArgs>(args?: SelectSubset<T, order_linesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_lines and returns the data saved in the database.
     * @param {order_linesCreateManyAndReturnArgs} args - Arguments to create many Order_lines.
     * @example
     * // Create many Order_lines
     * const order_lines = await prisma.order_lines.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_lines and only return the `id`
     * const order_linesWithIdOnly = await prisma.order_lines.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends order_linesCreateManyAndReturnArgs>(args?: SelectSubset<T, order_linesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order_lines.
     * @param {order_linesDeleteArgs} args - Arguments to delete one Order_lines.
     * @example
     * // Delete one Order_lines
     * const Order_lines = await prisma.order_lines.delete({
     *   where: {
     *     // ... filter to delete one Order_lines
     *   }
     * })
     * 
     */
    delete<T extends order_linesDeleteArgs>(args: SelectSubset<T, order_linesDeleteArgs<ExtArgs>>): Prisma__order_linesClient<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_lines.
     * @param {order_linesUpdateArgs} args - Arguments to update one Order_lines.
     * @example
     * // Update one Order_lines
     * const order_lines = await prisma.order_lines.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_linesUpdateArgs>(args: SelectSubset<T, order_linesUpdateArgs<ExtArgs>>): Prisma__order_linesClient<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_lines.
     * @param {order_linesDeleteManyArgs} args - Arguments to filter Order_lines to delete.
     * @example
     * // Delete a few Order_lines
     * const { count } = await prisma.order_lines.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_linesDeleteManyArgs>(args?: SelectSubset<T, order_linesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_linesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_lines
     * const order_lines = await prisma.order_lines.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_linesUpdateManyArgs>(args: SelectSubset<T, order_linesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_lines and returns the data updated in the database.
     * @param {order_linesUpdateManyAndReturnArgs} args - Arguments to update many Order_lines.
     * @example
     * // Update many Order_lines
     * const order_lines = await prisma.order_lines.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Order_lines and only return the `id`
     * const order_linesWithIdOnly = await prisma.order_lines.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends order_linesUpdateManyAndReturnArgs>(args: SelectSubset<T, order_linesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order_lines.
     * @param {order_linesUpsertArgs} args - Arguments to update or create a Order_lines.
     * @example
     * // Update or create a Order_lines
     * const order_lines = await prisma.order_lines.upsert({
     *   create: {
     *     // ... data to create a Order_lines
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_lines we want to update
     *   }
     * })
     */
    upsert<T extends order_linesUpsertArgs>(args: SelectSubset<T, order_linesUpsertArgs<ExtArgs>>): Prisma__order_linesClient<$Result.GetResult<Prisma.$order_linesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_linesCountArgs} args - Arguments to filter Order_lines to count.
     * @example
     * // Count the number of Order_lines
     * const count = await prisma.order_lines.count({
     *   where: {
     *     // ... the filter for the Order_lines we want to count
     *   }
     * })
    **/
    count<T extends order_linesCountArgs>(
      args?: Subset<T, order_linesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_linesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_linesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_linesAggregateArgs>(args: Subset<T, Order_linesAggregateArgs>): Prisma.PrismaPromise<GetOrder_linesAggregateType<T>>

    /**
     * Group by Order_lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_linesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends order_linesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_linesGroupByArgs['orderBy'] }
        : { orderBy?: order_linesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, order_linesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_linesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_lines model
   */
  readonly fields: order_linesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_lines.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_linesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order_lines model
   */
  interface order_linesFieldRefs {
    readonly id: FieldRef<"order_lines", 'String'>
    readonly order_id: FieldRef<"order_lines", 'String'>
    readonly product_id: FieldRef<"order_lines", 'String'>
    readonly price: FieldRef<"order_lines", 'Float'>
    readonly quantity: FieldRef<"order_lines", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * order_lines findUnique
   */
  export type order_linesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    /**
     * Filter, which order_lines to fetch.
     */
    where: order_linesWhereUniqueInput
  }

  /**
   * order_lines findUniqueOrThrow
   */
  export type order_linesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    /**
     * Filter, which order_lines to fetch.
     */
    where: order_linesWhereUniqueInput
  }

  /**
   * order_lines findFirst
   */
  export type order_linesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    /**
     * Filter, which order_lines to fetch.
     */
    where?: order_linesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_lines to fetch.
     */
    orderBy?: order_linesOrderByWithRelationInput | order_linesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_lines.
     */
    cursor?: order_linesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_lines.
     */
    distinct?: Order_linesScalarFieldEnum | Order_linesScalarFieldEnum[]
  }

  /**
   * order_lines findFirstOrThrow
   */
  export type order_linesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    /**
     * Filter, which order_lines to fetch.
     */
    where?: order_linesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_lines to fetch.
     */
    orderBy?: order_linesOrderByWithRelationInput | order_linesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_lines.
     */
    cursor?: order_linesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_lines.
     */
    distinct?: Order_linesScalarFieldEnum | Order_linesScalarFieldEnum[]
  }

  /**
   * order_lines findMany
   */
  export type order_linesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    /**
     * Filter, which order_lines to fetch.
     */
    where?: order_linesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_lines to fetch.
     */
    orderBy?: order_linesOrderByWithRelationInput | order_linesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_lines.
     */
    cursor?: order_linesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_lines.
     */
    skip?: number
    distinct?: Order_linesScalarFieldEnum | Order_linesScalarFieldEnum[]
  }

  /**
   * order_lines create
   */
  export type order_linesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    /**
     * The data needed to create a order_lines.
     */
    data: XOR<order_linesCreateInput, order_linesUncheckedCreateInput>
  }

  /**
   * order_lines createMany
   */
  export type order_linesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_lines.
     */
    data: order_linesCreateManyInput | order_linesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_lines createManyAndReturn
   */
  export type order_linesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * The data used to create many order_lines.
     */
    data: order_linesCreateManyInput | order_linesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_lines update
   */
  export type order_linesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    /**
     * The data needed to update a order_lines.
     */
    data: XOR<order_linesUpdateInput, order_linesUncheckedUpdateInput>
    /**
     * Choose, which order_lines to update.
     */
    where: order_linesWhereUniqueInput
  }

  /**
   * order_lines updateMany
   */
  export type order_linesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_lines.
     */
    data: XOR<order_linesUpdateManyMutationInput, order_linesUncheckedUpdateManyInput>
    /**
     * Filter which order_lines to update
     */
    where?: order_linesWhereInput
    /**
     * Limit how many order_lines to update.
     */
    limit?: number
  }

  /**
   * order_lines updateManyAndReturn
   */
  export type order_linesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * The data used to update order_lines.
     */
    data: XOR<order_linesUpdateManyMutationInput, order_linesUncheckedUpdateManyInput>
    /**
     * Filter which order_lines to update
     */
    where?: order_linesWhereInput
    /**
     * Limit how many order_lines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_lines upsert
   */
  export type order_linesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    /**
     * The filter to search for the order_lines to update in case it exists.
     */
    where: order_linesWhereUniqueInput
    /**
     * In case the order_lines found by the `where` argument doesn't exist, create a new order_lines with this data.
     */
    create: XOR<order_linesCreateInput, order_linesUncheckedCreateInput>
    /**
     * In case the order_lines was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_linesUpdateInput, order_linesUncheckedUpdateInput>
  }

  /**
   * order_lines delete
   */
  export type order_linesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
    /**
     * Filter which order_lines to delete.
     */
    where: order_linesWhereUniqueInput
  }

  /**
   * order_lines deleteMany
   */
  export type order_linesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_lines to delete
     */
    where?: order_linesWhereInput
    /**
     * Limit how many order_lines to delete.
     */
    limit?: number
  }

  /**
   * order_lines without action
   */
  export type order_linesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_lines
     */
    select?: order_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_lines
     */
    omit?: order_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_linesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    email: 'email',
    phone: 'phone',
    role: 'role',
    name: 'name',
    avatar: 'avatar',
    locale: 'locale',
    created_at: 'created_at',
    updated_at: 'updated_at',
    last_login: 'last_login',
    email_validated: 'email_validated',
    phone_validated: 'phone_validated',
    bio: 'bio',
    company: 'company'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CartsScalarFieldEnum: {
    id: 'id',
    created_by: 'created_by',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CartsScalarFieldEnum = (typeof CartsScalarFieldEnum)[keyof typeof CartsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const Social_profilesScalarFieldEnum: {
    user_id: 'user_id',
    platform: 'platform',
    platform_user: 'platform_user',
    created_at: 'created_at'
  };

  export type Social_profilesScalarFieldEnum = (typeof Social_profilesScalarFieldEnum)[keyof typeof Social_profilesScalarFieldEnum]


  export const CredentialsScalarFieldEnum: {
    provider_id: 'provider_id',
    provider_key: 'provider_key',
    user_id: 'user_id',
    hasher: 'hasher',
    password_hash: 'password_hash',
    password_salt: 'password_salt'
  };

  export type CredentialsScalarFieldEnum = (typeof CredentialsScalarFieldEnum)[keyof typeof CredentialsScalarFieldEnum]


  export const Cart_itemsScalarFieldEnum: {
    cart_id: 'cart_id',
    product_id: 'product_id',
    price: 'price',
    quantity: 'quantity',
    created_at: 'created_at',
    userId: 'userId'
  };

  export type Cart_itemsScalarFieldEnum = (typeof Cart_itemsScalarFieldEnum)[keyof typeof Cart_itemsScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const Order_linesScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    product_id: 'product_id',
    price: 'price',
    quantity: 'quantity'
  };

  export type Order_linesScalarFieldEnum = (typeof Order_linesScalarFieldEnum)[keyof typeof Order_linesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Locale'
   */
  export type EnumLocaleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Locale'>
    


  /**
   * Reference to a field of type 'Locale[]'
   */
  export type ListEnumLocaleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Locale[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'social_platform'
   */
  export type Enumsocial_platformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'social_platform'>
    


  /**
   * Reference to a field of type 'social_platform[]'
   */
  export type ListEnumsocial_platformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'social_platform[]'>
    


  /**
   * Reference to a field of type 'provider'
   */
  export type EnumproviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'provider'>
    


  /**
   * Reference to a field of type 'provider[]'
   */
  export type ListEnumproviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'provider[]'>
    


  /**
   * Reference to a field of type 'hash_method'
   */
  export type Enumhash_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'hash_method'>
    


  /**
   * Reference to a field of type 'hash_method[]'
   */
  export type ListEnumhash_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'hash_method[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    slug?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    name?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    locale?: EnumLocaleFilter<"User"> | $Enums.Locale
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    email_validated?: DateTimeNullableFilter<"User"> | Date | string | null
    phone_validated?: DateTimeNullableFilter<"User"> | Date | string | null
    bio?: StringNullableFilter<"User"> | string | null
    company?: StringNullableFilter<"User"> | string | null
    carts?: CartsListRelationFilter
    orders?: OrdersListRelationFilter
    social_profiles?: Social_profilesListRelationFilter
    credentials?: CredentialsListRelationFilter
    cart_items?: Cart_itemsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    locale?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_login?: SortOrderInput | SortOrder
    email_validated?: SortOrderInput | SortOrder
    phone_validated?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    carts?: cartsOrderByRelationAggregateInput
    orders?: ordersOrderByRelationAggregateInput
    social_profiles?: social_profilesOrderByRelationAggregateInput
    credentials?: credentialsOrderByRelationAggregateInput
    cart_items?: cart_itemsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    name?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    locale?: EnumLocaleFilter<"User"> | $Enums.Locale
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    email_validated?: DateTimeNullableFilter<"User"> | Date | string | null
    phone_validated?: DateTimeNullableFilter<"User"> | Date | string | null
    bio?: StringNullableFilter<"User"> | string | null
    company?: StringNullableFilter<"User"> | string | null
    carts?: CartsListRelationFilter
    orders?: OrdersListRelationFilter
    social_profiles?: Social_profilesListRelationFilter
    credentials?: CredentialsListRelationFilter
    cart_items?: Cart_itemsListRelationFilter
  }, "id" | "slug" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    locale?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_login?: SortOrderInput | SortOrder
    email_validated?: SortOrderInput | SortOrder
    phone_validated?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    slug?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    name?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringWithAggregatesFilter<"User"> | string
    locale?: EnumLocaleWithAggregatesFilter<"User"> | $Enums.Locale
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    last_login?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    email_validated?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    phone_validated?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    company?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type cartsWhereInput = {
    AND?: cartsWhereInput | cartsWhereInput[]
    OR?: cartsWhereInput[]
    NOT?: cartsWhereInput | cartsWhereInput[]
    id?: UuidFilter<"carts"> | string
    created_by?: StringFilter<"carts"> | string
    status?: EnumStatusFilter<"carts"> | $Enums.Status
    created_at?: DateTimeFilter<"carts"> | Date | string
    updated_at?: DateTimeFilter<"carts"> | Date | string
    created?: XOR<UserScalarRelationFilter, UserWhereInput>
    cart_items?: Cart_itemsListRelationFilter
  }

  export type cartsOrderByWithRelationInput = {
    id?: SortOrder
    created_by?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created?: UserOrderByWithRelationInput
    cart_items?: cart_itemsOrderByRelationAggregateInput
  }

  export type cartsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: cartsWhereInput | cartsWhereInput[]
    OR?: cartsWhereInput[]
    NOT?: cartsWhereInput | cartsWhereInput[]
    created_by?: StringFilter<"carts"> | string
    status?: EnumStatusFilter<"carts"> | $Enums.Status
    created_at?: DateTimeFilter<"carts"> | Date | string
    updated_at?: DateTimeFilter<"carts"> | Date | string
    created?: XOR<UserScalarRelationFilter, UserWhereInput>
    cart_items?: Cart_itemsListRelationFilter
  }, "id">

  export type cartsOrderByWithAggregationInput = {
    id?: SortOrder
    created_by?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: cartsCountOrderByAggregateInput
    _max?: cartsMaxOrderByAggregateInput
    _min?: cartsMinOrderByAggregateInput
  }

  export type cartsScalarWhereWithAggregatesInput = {
    AND?: cartsScalarWhereWithAggregatesInput | cartsScalarWhereWithAggregatesInput[]
    OR?: cartsScalarWhereWithAggregatesInput[]
    NOT?: cartsScalarWhereWithAggregatesInput | cartsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"carts"> | string
    created_by?: StringWithAggregatesFilter<"carts"> | string
    status?: EnumStatusWithAggregatesFilter<"carts"> | $Enums.Status
    created_at?: DateTimeWithAggregatesFilter<"carts"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"carts"> | Date | string
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: StringFilter<"orders"> | string
    user_id?: StringFilter<"orders"> | string
    created_at?: DateTimeFilter<"orders"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    order_lines?: Order_linesListRelationFilter
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    order_lines?: order_linesOrderByRelationAggregateInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    user_id?: StringFilter<"orders"> | string
    created_at?: DateTimeFilter<"orders"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    order_lines?: Order_linesListRelationFilter
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"orders"> | string
    user_id?: StringWithAggregatesFilter<"orders"> | string
    created_at?: DateTimeWithAggregatesFilter<"orders"> | Date | string
  }

  export type social_profilesWhereInput = {
    AND?: social_profilesWhereInput | social_profilesWhereInput[]
    OR?: social_profilesWhereInput[]
    NOT?: social_profilesWhereInput | social_profilesWhereInput[]
    user_id?: StringFilter<"social_profiles"> | string
    platform?: Enumsocial_platformFilter<"social_profiles"> | $Enums.social_platform
    platform_user?: StringFilter<"social_profiles"> | string
    created_at?: DateTimeFilter<"social_profiles"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type social_profilesOrderByWithRelationInput = {
    user_id?: SortOrder
    platform?: SortOrder
    platform_user?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type social_profilesWhereUniqueInput = Prisma.AtLeast<{
    user_id_platform?: social_profilesUser_idPlatformCompoundUniqueInput
    AND?: social_profilesWhereInput | social_profilesWhereInput[]
    OR?: social_profilesWhereInput[]
    NOT?: social_profilesWhereInput | social_profilesWhereInput[]
    user_id?: StringFilter<"social_profiles"> | string
    platform?: Enumsocial_platformFilter<"social_profiles"> | $Enums.social_platform
    platform_user?: StringFilter<"social_profiles"> | string
    created_at?: DateTimeFilter<"social_profiles"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "user_id_platform">

  export type social_profilesOrderByWithAggregationInput = {
    user_id?: SortOrder
    platform?: SortOrder
    platform_user?: SortOrder
    created_at?: SortOrder
    _count?: social_profilesCountOrderByAggregateInput
    _max?: social_profilesMaxOrderByAggregateInput
    _min?: social_profilesMinOrderByAggregateInput
  }

  export type social_profilesScalarWhereWithAggregatesInput = {
    AND?: social_profilesScalarWhereWithAggregatesInput | social_profilesScalarWhereWithAggregatesInput[]
    OR?: social_profilesScalarWhereWithAggregatesInput[]
    NOT?: social_profilesScalarWhereWithAggregatesInput | social_profilesScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"social_profiles"> | string
    platform?: Enumsocial_platformWithAggregatesFilter<"social_profiles"> | $Enums.social_platform
    platform_user?: StringWithAggregatesFilter<"social_profiles"> | string
    created_at?: DateTimeWithAggregatesFilter<"social_profiles"> | Date | string
  }

  export type credentialsWhereInput = {
    AND?: credentialsWhereInput | credentialsWhereInput[]
    OR?: credentialsWhereInput[]
    NOT?: credentialsWhereInput | credentialsWhereInput[]
    provider_id?: EnumproviderFilter<"credentials"> | $Enums.provider
    provider_key?: StringFilter<"credentials"> | string
    user_id?: StringFilter<"credentials"> | string
    hasher?: Enumhash_methodFilter<"credentials"> | $Enums.hash_method
    password_hash?: StringFilter<"credentials"> | string
    password_salt?: StringFilter<"credentials"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type credentialsOrderByWithRelationInput = {
    provider_id?: SortOrder
    provider_key?: SortOrder
    user_id?: SortOrder
    hasher?: SortOrder
    password_hash?: SortOrder
    password_salt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type credentialsWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: credentialsWhereInput | credentialsWhereInput[]
    OR?: credentialsWhereInput[]
    NOT?: credentialsWhereInput | credentialsWhereInput[]
    provider_id?: EnumproviderFilter<"credentials"> | $Enums.provider
    provider_key?: StringFilter<"credentials"> | string
    hasher?: Enumhash_methodFilter<"credentials"> | $Enums.hash_method
    password_hash?: StringFilter<"credentials"> | string
    password_salt?: StringFilter<"credentials"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "user_id">

  export type credentialsOrderByWithAggregationInput = {
    provider_id?: SortOrder
    provider_key?: SortOrder
    user_id?: SortOrder
    hasher?: SortOrder
    password_hash?: SortOrder
    password_salt?: SortOrder
    _count?: credentialsCountOrderByAggregateInput
    _max?: credentialsMaxOrderByAggregateInput
    _min?: credentialsMinOrderByAggregateInput
  }

  export type credentialsScalarWhereWithAggregatesInput = {
    AND?: credentialsScalarWhereWithAggregatesInput | credentialsScalarWhereWithAggregatesInput[]
    OR?: credentialsScalarWhereWithAggregatesInput[]
    NOT?: credentialsScalarWhereWithAggregatesInput | credentialsScalarWhereWithAggregatesInput[]
    provider_id?: EnumproviderWithAggregatesFilter<"credentials"> | $Enums.provider
    provider_key?: StringWithAggregatesFilter<"credentials"> | string
    user_id?: StringWithAggregatesFilter<"credentials"> | string
    hasher?: Enumhash_methodWithAggregatesFilter<"credentials"> | $Enums.hash_method
    password_hash?: StringWithAggregatesFilter<"credentials"> | string
    password_salt?: StringWithAggregatesFilter<"credentials"> | string
  }

  export type cart_itemsWhereInput = {
    AND?: cart_itemsWhereInput | cart_itemsWhereInput[]
    OR?: cart_itemsWhereInput[]
    NOT?: cart_itemsWhereInput | cart_itemsWhereInput[]
    cart_id?: UuidFilter<"cart_items"> | string
    product_id?: UuidFilter<"cart_items"> | string
    price?: FloatFilter<"cart_items"> | number
    quantity?: IntFilter<"cart_items"> | number
    created_at?: DateTimeFilter<"cart_items"> | Date | string
    userId?: StringNullableFilter<"cart_items"> | string | null
    cart?: XOR<CartsScalarRelationFilter, cartsWhereInput>
    product?: XOR<ProductsScalarRelationFilter, productsWhereInput>
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type cart_itemsOrderByWithRelationInput = {
    cart_id?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    userId?: SortOrderInput | SortOrder
    cart?: cartsOrderByWithRelationInput
    product?: productsOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type cart_itemsWhereUniqueInput = Prisma.AtLeast<{
    cart_id_product_id?: cart_itemsCart_idProduct_idCompoundUniqueInput
    AND?: cart_itemsWhereInput | cart_itemsWhereInput[]
    OR?: cart_itemsWhereInput[]
    NOT?: cart_itemsWhereInput | cart_itemsWhereInput[]
    cart_id?: UuidFilter<"cart_items"> | string
    product_id?: UuidFilter<"cart_items"> | string
    price?: FloatFilter<"cart_items"> | number
    quantity?: IntFilter<"cart_items"> | number
    created_at?: DateTimeFilter<"cart_items"> | Date | string
    userId?: StringNullableFilter<"cart_items"> | string | null
    cart?: XOR<CartsScalarRelationFilter, cartsWhereInput>
    product?: XOR<ProductsScalarRelationFilter, productsWhereInput>
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "cart_id_product_id">

  export type cart_itemsOrderByWithAggregationInput = {
    cart_id?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: cart_itemsCountOrderByAggregateInput
    _avg?: cart_itemsAvgOrderByAggregateInput
    _max?: cart_itemsMaxOrderByAggregateInput
    _min?: cart_itemsMinOrderByAggregateInput
    _sum?: cart_itemsSumOrderByAggregateInput
  }

  export type cart_itemsScalarWhereWithAggregatesInput = {
    AND?: cart_itemsScalarWhereWithAggregatesInput | cart_itemsScalarWhereWithAggregatesInput[]
    OR?: cart_itemsScalarWhereWithAggregatesInput[]
    NOT?: cart_itemsScalarWhereWithAggregatesInput | cart_itemsScalarWhereWithAggregatesInput[]
    cart_id?: UuidWithAggregatesFilter<"cart_items"> | string
    product_id?: UuidWithAggregatesFilter<"cart_items"> | string
    price?: FloatWithAggregatesFilter<"cart_items"> | number
    quantity?: IntWithAggregatesFilter<"cart_items"> | number
    created_at?: DateTimeWithAggregatesFilter<"cart_items"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"cart_items"> | string | null
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: StringFilter<"products"> | string
    cart_items?: Cart_itemsListRelationFilter
    order_lines?: Order_linesListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    cart_items?: cart_itemsOrderByRelationAggregateInput
    order_lines?: order_linesOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    cart_items?: Cart_itemsListRelationFilter
    order_lines?: Order_linesListRelationFilter
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"products"> | string
  }

  export type order_linesWhereInput = {
    AND?: order_linesWhereInput | order_linesWhereInput[]
    OR?: order_linesWhereInput[]
    NOT?: order_linesWhereInput | order_linesWhereInput[]
    id?: StringFilter<"order_lines"> | string
    order_id?: UuidFilter<"order_lines"> | string
    product_id?: UuidFilter<"order_lines"> | string
    price?: FloatFilter<"order_lines"> | number
    quantity?: IntFilter<"order_lines"> | number
    order?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    product?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type order_linesOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    order?: ordersOrderByWithRelationInput
    product?: productsOrderByWithRelationInput
  }

  export type order_linesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: order_linesWhereInput | order_linesWhereInput[]
    OR?: order_linesWhereInput[]
    NOT?: order_linesWhereInput | order_linesWhereInput[]
    order_id?: UuidFilter<"order_lines"> | string
    product_id?: UuidFilter<"order_lines"> | string
    price?: FloatFilter<"order_lines"> | number
    quantity?: IntFilter<"order_lines"> | number
    order?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    product?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id">

  export type order_linesOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    _count?: order_linesCountOrderByAggregateInput
    _avg?: order_linesAvgOrderByAggregateInput
    _max?: order_linesMaxOrderByAggregateInput
    _min?: order_linesMinOrderByAggregateInput
    _sum?: order_linesSumOrderByAggregateInput
  }

  export type order_linesScalarWhereWithAggregatesInput = {
    AND?: order_linesScalarWhereWithAggregatesInput | order_linesScalarWhereWithAggregatesInput[]
    OR?: order_linesScalarWhereWithAggregatesInput[]
    NOT?: order_linesScalarWhereWithAggregatesInput | order_linesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"order_lines"> | string
    order_id?: UuidWithAggregatesFilter<"order_lines"> | string
    product_id?: UuidWithAggregatesFilter<"order_lines"> | string
    price?: FloatWithAggregatesFilter<"order_lines"> | number
    quantity?: IntWithAggregatesFilter<"order_lines"> | number
  }

  export type UserCreateInput = {
    id?: string
    slug: string
    email: string
    phone: string
    role: $Enums.UserRole
    name: string
    avatar: string
    locale: $Enums.Locale
    created_at?: Date | string
    updated_at?: Date | string
    last_login?: Date | string | null
    email_validated?: Date | string | null
    phone_validated?: Date | string | null
    bio?: string | null
    company?: string | null
    carts?: cartsCreateNestedManyWithoutCreatedInput
    orders?: ordersCreateNestedManyWithoutUserInput
    social_profiles?: social_profilesCreateNestedManyWithoutUserInput
    credentials?: credentialsCreateNestedManyWithoutUserInput
    cart_items?: cart_itemsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    slug: string
    email: string
    phone: string
    role: $Enums.UserRole
    name: string
    avatar: string
    locale: $Enums.Locale
    created_at?: Date | string
    updated_at?: Date | string
    last_login?: Date | string | null
    email_validated?: Date | string | null
    phone_validated?: Date | string | null
    bio?: string | null
    company?: string | null
    carts?: cartsUncheckedCreateNestedManyWithoutCreatedInput
    orders?: ordersUncheckedCreateNestedManyWithoutUserInput
    social_profiles?: social_profilesUncheckedCreateNestedManyWithoutUserInput
    credentials?: credentialsUncheckedCreateNestedManyWithoutUserInput
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartsUpdateManyWithoutCreatedNestedInput
    orders?: ordersUpdateManyWithoutUserNestedInput
    social_profiles?: social_profilesUpdateManyWithoutUserNestedInput
    credentials?: credentialsUpdateManyWithoutUserNestedInput
    cart_items?: cart_itemsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartsUncheckedUpdateManyWithoutCreatedNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUserNestedInput
    social_profiles?: social_profilesUncheckedUpdateManyWithoutUserNestedInput
    credentials?: credentialsUncheckedUpdateManyWithoutUserNestedInput
    cart_items?: cart_itemsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    slug: string
    email: string
    phone: string
    role: $Enums.UserRole
    name: string
    avatar: string
    locale: $Enums.Locale
    created_at?: Date | string
    updated_at?: Date | string
    last_login?: Date | string | null
    email_validated?: Date | string | null
    phone_validated?: Date | string | null
    bio?: string | null
    company?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cartsCreateInput = {
    id?: string
    status: $Enums.Status
    created_at: Date | string
    updated_at: Date | string
    created: UserCreateNestedOneWithoutCartsInput
    cart_items?: cart_itemsCreateNestedManyWithoutCartInput
  }

  export type cartsUncheckedCreateInput = {
    id?: string
    created_by: string
    status: $Enums.Status
    created_at: Date | string
    updated_at: Date | string
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutCartInput
  }

  export type cartsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: UserUpdateOneRequiredWithoutCartsNestedInput
    cart_items?: cart_itemsUpdateManyWithoutCartNestedInput
  }

  export type cartsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: cart_itemsUncheckedUpdateManyWithoutCartNestedInput
  }

  export type cartsCreateManyInput = {
    id?: string
    created_by: string
    status: $Enums.Status
    created_at: Date | string
    updated_at: Date | string
  }

  export type cartsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cartsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersCreateInput = {
    id?: string
    created_at: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    order_lines?: order_linesCreateNestedManyWithoutOrderInput
  }

  export type ordersUncheckedCreateInput = {
    id?: string
    user_id: string
    created_at: Date | string
    order_lines?: order_linesUncheckedCreateNestedManyWithoutOrderInput
  }

  export type ordersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    order_lines?: order_linesUpdateManyWithoutOrderNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_lines?: order_linesUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ordersCreateManyInput = {
    id?: string
    user_id: string
    created_at: Date | string
  }

  export type ordersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type social_profilesCreateInput = {
    platform: $Enums.social_platform
    platform_user: string
    created_at: Date | string
    user: UserCreateNestedOneWithoutSocial_profilesInput
  }

  export type social_profilesUncheckedCreateInput = {
    user_id: string
    platform: $Enums.social_platform
    platform_user: string
    created_at: Date | string
  }

  export type social_profilesUpdateInput = {
    platform?: Enumsocial_platformFieldUpdateOperationsInput | $Enums.social_platform
    platform_user?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSocial_profilesNestedInput
  }

  export type social_profilesUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    platform?: Enumsocial_platformFieldUpdateOperationsInput | $Enums.social_platform
    platform_user?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type social_profilesCreateManyInput = {
    user_id: string
    platform: $Enums.social_platform
    platform_user: string
    created_at: Date | string
  }

  export type social_profilesUpdateManyMutationInput = {
    platform?: Enumsocial_platformFieldUpdateOperationsInput | $Enums.social_platform
    platform_user?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type social_profilesUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    platform?: Enumsocial_platformFieldUpdateOperationsInput | $Enums.social_platform
    platform_user?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type credentialsCreateInput = {
    provider_id: $Enums.provider
    provider_key: string
    hasher: $Enums.hash_method
    password_hash: string
    password_salt: string
    user: UserCreateNestedOneWithoutCredentialsInput
  }

  export type credentialsUncheckedCreateInput = {
    provider_id: $Enums.provider
    provider_key: string
    user_id: string
    hasher: $Enums.hash_method
    password_hash: string
    password_salt: string
  }

  export type credentialsUpdateInput = {
    provider_id?: EnumproviderFieldUpdateOperationsInput | $Enums.provider
    provider_key?: StringFieldUpdateOperationsInput | string
    hasher?: Enumhash_methodFieldUpdateOperationsInput | $Enums.hash_method
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCredentialsNestedInput
  }

  export type credentialsUncheckedUpdateInput = {
    provider_id?: EnumproviderFieldUpdateOperationsInput | $Enums.provider
    provider_key?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    hasher?: Enumhash_methodFieldUpdateOperationsInput | $Enums.hash_method
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
  }

  export type credentialsCreateManyInput = {
    provider_id: $Enums.provider
    provider_key: string
    user_id: string
    hasher: $Enums.hash_method
    password_hash: string
    password_salt: string
  }

  export type credentialsUpdateManyMutationInput = {
    provider_id?: EnumproviderFieldUpdateOperationsInput | $Enums.provider
    provider_key?: StringFieldUpdateOperationsInput | string
    hasher?: Enumhash_methodFieldUpdateOperationsInput | $Enums.hash_method
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
  }

  export type credentialsUncheckedUpdateManyInput = {
    provider_id?: EnumproviderFieldUpdateOperationsInput | $Enums.provider
    provider_key?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    hasher?: Enumhash_methodFieldUpdateOperationsInput | $Enums.hash_method
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
  }

  export type cart_itemsCreateInput = {
    price: number
    quantity: number
    created_at: Date | string
    cart: cartsCreateNestedOneWithoutCart_itemsInput
    product: productsCreateNestedOneWithoutCart_itemsInput
    User?: UserCreateNestedOneWithoutCart_itemsInput
  }

  export type cart_itemsUncheckedCreateInput = {
    cart_id: string
    product_id: string
    price: number
    quantity: number
    created_at: Date | string
    userId?: string | null
  }

  export type cart_itemsUpdateInput = {
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartsUpdateOneRequiredWithoutCart_itemsNestedInput
    product?: productsUpdateOneRequiredWithoutCart_itemsNestedInput
    User?: UserUpdateOneWithoutCart_itemsNestedInput
  }

  export type cart_itemsUncheckedUpdateInput = {
    cart_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cart_itemsCreateManyInput = {
    cart_id: string
    product_id: string
    price: number
    quantity: number
    created_at: Date | string
    userId?: string | null
  }

  export type cart_itemsUpdateManyMutationInput = {
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cart_itemsUncheckedUpdateManyInput = {
    cart_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsCreateInput = {
    id?: string
    cart_items?: cart_itemsCreateNestedManyWithoutProductInput
    order_lines?: order_linesCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateInput = {
    id?: string
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutProductInput
    order_lines?: order_linesUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart_items?: cart_itemsUpdateManyWithoutProductNestedInput
    order_lines?: order_linesUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart_items?: cart_itemsUncheckedUpdateManyWithoutProductNestedInput
    order_lines?: order_linesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productsCreateManyInput = {
    id?: string
  }

  export type productsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type productsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type order_linesCreateInput = {
    id?: string
    price: number
    quantity: number
    order: ordersCreateNestedOneWithoutOrder_linesInput
    product: productsCreateNestedOneWithoutOrder_linesInput
  }

  export type order_linesUncheckedCreateInput = {
    id?: string
    order_id: string
    product_id: string
    price: number
    quantity: number
  }

  export type order_linesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    order?: ordersUpdateOneRequiredWithoutOrder_linesNestedInput
    product?: productsUpdateOneRequiredWithoutOrder_linesNestedInput
  }

  export type order_linesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type order_linesCreateManyInput = {
    id?: string
    order_id: string
    product_id: string
    price: number
    quantity: number
  }

  export type order_linesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type order_linesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumLocaleFilter<$PrismaModel = never> = {
    equals?: $Enums.Locale | EnumLocaleFieldRefInput<$PrismaModel>
    in?: $Enums.Locale[] | ListEnumLocaleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Locale[] | ListEnumLocaleFieldRefInput<$PrismaModel>
    not?: NestedEnumLocaleFilter<$PrismaModel> | $Enums.Locale
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CartsListRelationFilter = {
    every?: cartsWhereInput
    some?: cartsWhereInput
    none?: cartsWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type Social_profilesListRelationFilter = {
    every?: social_profilesWhereInput
    some?: social_profilesWhereInput
    none?: social_profilesWhereInput
  }

  export type CredentialsListRelationFilter = {
    every?: credentialsWhereInput
    some?: credentialsWhereInput
    none?: credentialsWhereInput
  }

  export type Cart_itemsListRelationFilter = {
    every?: cart_itemsWhereInput
    some?: cart_itemsWhereInput
    none?: cart_itemsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type cartsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type social_profilesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type credentialsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cart_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    locale?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_login?: SortOrder
    email_validated?: SortOrder
    phone_validated?: SortOrder
    bio?: SortOrder
    company?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    locale?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_login?: SortOrder
    email_validated?: SortOrder
    phone_validated?: SortOrder
    bio?: SortOrder
    company?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    locale?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_login?: SortOrder
    email_validated?: SortOrder
    phone_validated?: SortOrder
    bio?: SortOrder
    company?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumLocaleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Locale | EnumLocaleFieldRefInput<$PrismaModel>
    in?: $Enums.Locale[] | ListEnumLocaleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Locale[] | ListEnumLocaleFieldRefInput<$PrismaModel>
    not?: NestedEnumLocaleWithAggregatesFilter<$PrismaModel> | $Enums.Locale
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocaleFilter<$PrismaModel>
    _max?: NestedEnumLocaleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type cartsCountOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cartsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cartsMinOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type Order_linesListRelationFilter = {
    every?: order_linesWhereInput
    some?: order_linesWhereInput
    none?: order_linesWhereInput
  }

  export type order_linesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type Enumsocial_platformFilter<$PrismaModel = never> = {
    equals?: $Enums.social_platform | Enumsocial_platformFieldRefInput<$PrismaModel>
    in?: $Enums.social_platform[] | ListEnumsocial_platformFieldRefInput<$PrismaModel>
    notIn?: $Enums.social_platform[] | ListEnumsocial_platformFieldRefInput<$PrismaModel>
    not?: NestedEnumsocial_platformFilter<$PrismaModel> | $Enums.social_platform
  }

  export type social_profilesUser_idPlatformCompoundUniqueInput = {
    user_id: string
    platform: $Enums.social_platform
  }

  export type social_profilesCountOrderByAggregateInput = {
    user_id?: SortOrder
    platform?: SortOrder
    platform_user?: SortOrder
    created_at?: SortOrder
  }

  export type social_profilesMaxOrderByAggregateInput = {
    user_id?: SortOrder
    platform?: SortOrder
    platform_user?: SortOrder
    created_at?: SortOrder
  }

  export type social_profilesMinOrderByAggregateInput = {
    user_id?: SortOrder
    platform?: SortOrder
    platform_user?: SortOrder
    created_at?: SortOrder
  }

  export type Enumsocial_platformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.social_platform | Enumsocial_platformFieldRefInput<$PrismaModel>
    in?: $Enums.social_platform[] | ListEnumsocial_platformFieldRefInput<$PrismaModel>
    notIn?: $Enums.social_platform[] | ListEnumsocial_platformFieldRefInput<$PrismaModel>
    not?: NestedEnumsocial_platformWithAggregatesFilter<$PrismaModel> | $Enums.social_platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsocial_platformFilter<$PrismaModel>
    _max?: NestedEnumsocial_platformFilter<$PrismaModel>
  }

  export type EnumproviderFilter<$PrismaModel = never> = {
    equals?: $Enums.provider | EnumproviderFieldRefInput<$PrismaModel>
    in?: $Enums.provider[] | ListEnumproviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.provider[] | ListEnumproviderFieldRefInput<$PrismaModel>
    not?: NestedEnumproviderFilter<$PrismaModel> | $Enums.provider
  }

  export type Enumhash_methodFilter<$PrismaModel = never> = {
    equals?: $Enums.hash_method | Enumhash_methodFieldRefInput<$PrismaModel>
    in?: $Enums.hash_method[] | ListEnumhash_methodFieldRefInput<$PrismaModel>
    notIn?: $Enums.hash_method[] | ListEnumhash_methodFieldRefInput<$PrismaModel>
    not?: NestedEnumhash_methodFilter<$PrismaModel> | $Enums.hash_method
  }

  export type credentialsCountOrderByAggregateInput = {
    provider_id?: SortOrder
    provider_key?: SortOrder
    user_id?: SortOrder
    hasher?: SortOrder
    password_hash?: SortOrder
    password_salt?: SortOrder
  }

  export type credentialsMaxOrderByAggregateInput = {
    provider_id?: SortOrder
    provider_key?: SortOrder
    user_id?: SortOrder
    hasher?: SortOrder
    password_hash?: SortOrder
    password_salt?: SortOrder
  }

  export type credentialsMinOrderByAggregateInput = {
    provider_id?: SortOrder
    provider_key?: SortOrder
    user_id?: SortOrder
    hasher?: SortOrder
    password_hash?: SortOrder
    password_salt?: SortOrder
  }

  export type EnumproviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.provider | EnumproviderFieldRefInput<$PrismaModel>
    in?: $Enums.provider[] | ListEnumproviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.provider[] | ListEnumproviderFieldRefInput<$PrismaModel>
    not?: NestedEnumproviderWithAggregatesFilter<$PrismaModel> | $Enums.provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproviderFilter<$PrismaModel>
    _max?: NestedEnumproviderFilter<$PrismaModel>
  }

  export type Enumhash_methodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hash_method | Enumhash_methodFieldRefInput<$PrismaModel>
    in?: $Enums.hash_method[] | ListEnumhash_methodFieldRefInput<$PrismaModel>
    notIn?: $Enums.hash_method[] | ListEnumhash_methodFieldRefInput<$PrismaModel>
    not?: NestedEnumhash_methodWithAggregatesFilter<$PrismaModel> | $Enums.hash_method
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhash_methodFilter<$PrismaModel>
    _max?: NestedEnumhash_methodFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CartsScalarRelationFilter = {
    is?: cartsWhereInput
    isNot?: cartsWhereInput
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type cart_itemsCart_idProduct_idCompoundUniqueInput = {
    cart_id: string
    product_id: string
  }

  export type cart_itemsCountOrderByAggregateInput = {
    cart_id?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    userId?: SortOrder
  }

  export type cart_itemsAvgOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
  }

  export type cart_itemsMaxOrderByAggregateInput = {
    cart_id?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    userId?: SortOrder
  }

  export type cart_itemsMinOrderByAggregateInput = {
    cart_id?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    userId?: SortOrder
  }

  export type cart_itemsSumOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrdersScalarRelationFilter = {
    is?: ordersWhereInput
    isNot?: ordersWhereInput
  }

  export type order_linesCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type order_linesAvgOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
  }

  export type order_linesMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type order_linesMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type order_linesSumOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
  }

  export type cartsCreateNestedManyWithoutCreatedInput = {
    create?: XOR<cartsCreateWithoutCreatedInput, cartsUncheckedCreateWithoutCreatedInput> | cartsCreateWithoutCreatedInput[] | cartsUncheckedCreateWithoutCreatedInput[]
    connectOrCreate?: cartsCreateOrConnectWithoutCreatedInput | cartsCreateOrConnectWithoutCreatedInput[]
    createMany?: cartsCreateManyCreatedInputEnvelope
    connect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
  }

  export type ordersCreateNestedManyWithoutUserInput = {
    create?: XOR<ordersCreateWithoutUserInput, ordersUncheckedCreateWithoutUserInput> | ordersCreateWithoutUserInput[] | ordersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUserInput | ordersCreateOrConnectWithoutUserInput[]
    createMany?: ordersCreateManyUserInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type social_profilesCreateNestedManyWithoutUserInput = {
    create?: XOR<social_profilesCreateWithoutUserInput, social_profilesUncheckedCreateWithoutUserInput> | social_profilesCreateWithoutUserInput[] | social_profilesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: social_profilesCreateOrConnectWithoutUserInput | social_profilesCreateOrConnectWithoutUserInput[]
    createMany?: social_profilesCreateManyUserInputEnvelope
    connect?: social_profilesWhereUniqueInput | social_profilesWhereUniqueInput[]
  }

  export type credentialsCreateNestedManyWithoutUserInput = {
    create?: XOR<credentialsCreateWithoutUserInput, credentialsUncheckedCreateWithoutUserInput> | credentialsCreateWithoutUserInput[] | credentialsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: credentialsCreateOrConnectWithoutUserInput | credentialsCreateOrConnectWithoutUserInput[]
    createMany?: credentialsCreateManyUserInputEnvelope
    connect?: credentialsWhereUniqueInput | credentialsWhereUniqueInput[]
  }

  export type cart_itemsCreateNestedManyWithoutUserInput = {
    create?: XOR<cart_itemsCreateWithoutUserInput, cart_itemsUncheckedCreateWithoutUserInput> | cart_itemsCreateWithoutUserInput[] | cart_itemsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutUserInput | cart_itemsCreateOrConnectWithoutUserInput[]
    createMany?: cart_itemsCreateManyUserInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type cartsUncheckedCreateNestedManyWithoutCreatedInput = {
    create?: XOR<cartsCreateWithoutCreatedInput, cartsUncheckedCreateWithoutCreatedInput> | cartsCreateWithoutCreatedInput[] | cartsUncheckedCreateWithoutCreatedInput[]
    connectOrCreate?: cartsCreateOrConnectWithoutCreatedInput | cartsCreateOrConnectWithoutCreatedInput[]
    createMany?: cartsCreateManyCreatedInputEnvelope
    connect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ordersCreateWithoutUserInput, ordersUncheckedCreateWithoutUserInput> | ordersCreateWithoutUserInput[] | ordersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUserInput | ordersCreateOrConnectWithoutUserInput[]
    createMany?: ordersCreateManyUserInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type social_profilesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<social_profilesCreateWithoutUserInput, social_profilesUncheckedCreateWithoutUserInput> | social_profilesCreateWithoutUserInput[] | social_profilesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: social_profilesCreateOrConnectWithoutUserInput | social_profilesCreateOrConnectWithoutUserInput[]
    createMany?: social_profilesCreateManyUserInputEnvelope
    connect?: social_profilesWhereUniqueInput | social_profilesWhereUniqueInput[]
  }

  export type credentialsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<credentialsCreateWithoutUserInput, credentialsUncheckedCreateWithoutUserInput> | credentialsCreateWithoutUserInput[] | credentialsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: credentialsCreateOrConnectWithoutUserInput | credentialsCreateOrConnectWithoutUserInput[]
    createMany?: credentialsCreateManyUserInputEnvelope
    connect?: credentialsWhereUniqueInput | credentialsWhereUniqueInput[]
  }

  export type cart_itemsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<cart_itemsCreateWithoutUserInput, cart_itemsUncheckedCreateWithoutUserInput> | cart_itemsCreateWithoutUserInput[] | cart_itemsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutUserInput | cart_itemsCreateOrConnectWithoutUserInput[]
    createMany?: cart_itemsCreateManyUserInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumLocaleFieldUpdateOperationsInput = {
    set?: $Enums.Locale
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type cartsUpdateManyWithoutCreatedNestedInput = {
    create?: XOR<cartsCreateWithoutCreatedInput, cartsUncheckedCreateWithoutCreatedInput> | cartsCreateWithoutCreatedInput[] | cartsUncheckedCreateWithoutCreatedInput[]
    connectOrCreate?: cartsCreateOrConnectWithoutCreatedInput | cartsCreateOrConnectWithoutCreatedInput[]
    upsert?: cartsUpsertWithWhereUniqueWithoutCreatedInput | cartsUpsertWithWhereUniqueWithoutCreatedInput[]
    createMany?: cartsCreateManyCreatedInputEnvelope
    set?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    disconnect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    delete?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    connect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    update?: cartsUpdateWithWhereUniqueWithoutCreatedInput | cartsUpdateWithWhereUniqueWithoutCreatedInput[]
    updateMany?: cartsUpdateManyWithWhereWithoutCreatedInput | cartsUpdateManyWithWhereWithoutCreatedInput[]
    deleteMany?: cartsScalarWhereInput | cartsScalarWhereInput[]
  }

  export type ordersUpdateManyWithoutUserNestedInput = {
    create?: XOR<ordersCreateWithoutUserInput, ordersUncheckedCreateWithoutUserInput> | ordersCreateWithoutUserInput[] | ordersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUserInput | ordersCreateOrConnectWithoutUserInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUserInput | ordersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ordersCreateManyUserInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUserInput | ordersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUserInput | ordersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type social_profilesUpdateManyWithoutUserNestedInput = {
    create?: XOR<social_profilesCreateWithoutUserInput, social_profilesUncheckedCreateWithoutUserInput> | social_profilesCreateWithoutUserInput[] | social_profilesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: social_profilesCreateOrConnectWithoutUserInput | social_profilesCreateOrConnectWithoutUserInput[]
    upsert?: social_profilesUpsertWithWhereUniqueWithoutUserInput | social_profilesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: social_profilesCreateManyUserInputEnvelope
    set?: social_profilesWhereUniqueInput | social_profilesWhereUniqueInput[]
    disconnect?: social_profilesWhereUniqueInput | social_profilesWhereUniqueInput[]
    delete?: social_profilesWhereUniqueInput | social_profilesWhereUniqueInput[]
    connect?: social_profilesWhereUniqueInput | social_profilesWhereUniqueInput[]
    update?: social_profilesUpdateWithWhereUniqueWithoutUserInput | social_profilesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: social_profilesUpdateManyWithWhereWithoutUserInput | social_profilesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: social_profilesScalarWhereInput | social_profilesScalarWhereInput[]
  }

  export type credentialsUpdateManyWithoutUserNestedInput = {
    create?: XOR<credentialsCreateWithoutUserInput, credentialsUncheckedCreateWithoutUserInput> | credentialsCreateWithoutUserInput[] | credentialsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: credentialsCreateOrConnectWithoutUserInput | credentialsCreateOrConnectWithoutUserInput[]
    upsert?: credentialsUpsertWithWhereUniqueWithoutUserInput | credentialsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: credentialsCreateManyUserInputEnvelope
    set?: credentialsWhereUniqueInput | credentialsWhereUniqueInput[]
    disconnect?: credentialsWhereUniqueInput | credentialsWhereUniqueInput[]
    delete?: credentialsWhereUniqueInput | credentialsWhereUniqueInput[]
    connect?: credentialsWhereUniqueInput | credentialsWhereUniqueInput[]
    update?: credentialsUpdateWithWhereUniqueWithoutUserInput | credentialsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: credentialsUpdateManyWithWhereWithoutUserInput | credentialsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: credentialsScalarWhereInput | credentialsScalarWhereInput[]
  }

  export type cart_itemsUpdateManyWithoutUserNestedInput = {
    create?: XOR<cart_itemsCreateWithoutUserInput, cart_itemsUncheckedCreateWithoutUserInput> | cart_itemsCreateWithoutUserInput[] | cart_itemsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutUserInput | cart_itemsCreateOrConnectWithoutUserInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutUserInput | cart_itemsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: cart_itemsCreateManyUserInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutUserInput | cart_itemsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutUserInput | cart_itemsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type cartsUncheckedUpdateManyWithoutCreatedNestedInput = {
    create?: XOR<cartsCreateWithoutCreatedInput, cartsUncheckedCreateWithoutCreatedInput> | cartsCreateWithoutCreatedInput[] | cartsUncheckedCreateWithoutCreatedInput[]
    connectOrCreate?: cartsCreateOrConnectWithoutCreatedInput | cartsCreateOrConnectWithoutCreatedInput[]
    upsert?: cartsUpsertWithWhereUniqueWithoutCreatedInput | cartsUpsertWithWhereUniqueWithoutCreatedInput[]
    createMany?: cartsCreateManyCreatedInputEnvelope
    set?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    disconnect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    delete?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    connect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    update?: cartsUpdateWithWhereUniqueWithoutCreatedInput | cartsUpdateWithWhereUniqueWithoutCreatedInput[]
    updateMany?: cartsUpdateManyWithWhereWithoutCreatedInput | cartsUpdateManyWithWhereWithoutCreatedInput[]
    deleteMany?: cartsScalarWhereInput | cartsScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ordersCreateWithoutUserInput, ordersUncheckedCreateWithoutUserInput> | ordersCreateWithoutUserInput[] | ordersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUserInput | ordersCreateOrConnectWithoutUserInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUserInput | ordersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ordersCreateManyUserInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUserInput | ordersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUserInput | ordersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type social_profilesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<social_profilesCreateWithoutUserInput, social_profilesUncheckedCreateWithoutUserInput> | social_profilesCreateWithoutUserInput[] | social_profilesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: social_profilesCreateOrConnectWithoutUserInput | social_profilesCreateOrConnectWithoutUserInput[]
    upsert?: social_profilesUpsertWithWhereUniqueWithoutUserInput | social_profilesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: social_profilesCreateManyUserInputEnvelope
    set?: social_profilesWhereUniqueInput | social_profilesWhereUniqueInput[]
    disconnect?: social_profilesWhereUniqueInput | social_profilesWhereUniqueInput[]
    delete?: social_profilesWhereUniqueInput | social_profilesWhereUniqueInput[]
    connect?: social_profilesWhereUniqueInput | social_profilesWhereUniqueInput[]
    update?: social_profilesUpdateWithWhereUniqueWithoutUserInput | social_profilesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: social_profilesUpdateManyWithWhereWithoutUserInput | social_profilesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: social_profilesScalarWhereInput | social_profilesScalarWhereInput[]
  }

  export type credentialsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<credentialsCreateWithoutUserInput, credentialsUncheckedCreateWithoutUserInput> | credentialsCreateWithoutUserInput[] | credentialsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: credentialsCreateOrConnectWithoutUserInput | credentialsCreateOrConnectWithoutUserInput[]
    upsert?: credentialsUpsertWithWhereUniqueWithoutUserInput | credentialsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: credentialsCreateManyUserInputEnvelope
    set?: credentialsWhereUniqueInput | credentialsWhereUniqueInput[]
    disconnect?: credentialsWhereUniqueInput | credentialsWhereUniqueInput[]
    delete?: credentialsWhereUniqueInput | credentialsWhereUniqueInput[]
    connect?: credentialsWhereUniqueInput | credentialsWhereUniqueInput[]
    update?: credentialsUpdateWithWhereUniqueWithoutUserInput | credentialsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: credentialsUpdateManyWithWhereWithoutUserInput | credentialsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: credentialsScalarWhereInput | credentialsScalarWhereInput[]
  }

  export type cart_itemsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<cart_itemsCreateWithoutUserInput, cart_itemsUncheckedCreateWithoutUserInput> | cart_itemsCreateWithoutUserInput[] | cart_itemsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutUserInput | cart_itemsCreateOrConnectWithoutUserInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutUserInput | cart_itemsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: cart_itemsCreateManyUserInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutUserInput | cart_itemsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutUserInput | cart_itemsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCartsInput = {
    create?: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartsInput
    connect?: UserWhereUniqueInput
  }

  export type cart_itemsCreateNestedManyWithoutCartInput = {
    create?: XOR<cart_itemsCreateWithoutCartInput, cart_itemsUncheckedCreateWithoutCartInput> | cart_itemsCreateWithoutCartInput[] | cart_itemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutCartInput | cart_itemsCreateOrConnectWithoutCartInput[]
    createMany?: cart_itemsCreateManyCartInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type cart_itemsUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<cart_itemsCreateWithoutCartInput, cart_itemsUncheckedCreateWithoutCartInput> | cart_itemsCreateWithoutCartInput[] | cart_itemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutCartInput | cart_itemsCreateOrConnectWithoutCartInput[]
    createMany?: cart_itemsCreateManyCartInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartsInput
    upsert?: UserUpsertWithoutCartsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartsInput, UserUpdateWithoutCartsInput>, UserUncheckedUpdateWithoutCartsInput>
  }

  export type cart_itemsUpdateManyWithoutCartNestedInput = {
    create?: XOR<cart_itemsCreateWithoutCartInput, cart_itemsUncheckedCreateWithoutCartInput> | cart_itemsCreateWithoutCartInput[] | cart_itemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutCartInput | cart_itemsCreateOrConnectWithoutCartInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutCartInput | cart_itemsUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: cart_itemsCreateManyCartInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutCartInput | cart_itemsUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutCartInput | cart_itemsUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type cart_itemsUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<cart_itemsCreateWithoutCartInput, cart_itemsUncheckedCreateWithoutCartInput> | cart_itemsCreateWithoutCartInput[] | cart_itemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutCartInput | cart_itemsCreateOrConnectWithoutCartInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutCartInput | cart_itemsUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: cart_itemsCreateManyCartInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutCartInput | cart_itemsUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutCartInput | cart_itemsUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type order_linesCreateNestedManyWithoutOrderInput = {
    create?: XOR<order_linesCreateWithoutOrderInput, order_linesUncheckedCreateWithoutOrderInput> | order_linesCreateWithoutOrderInput[] | order_linesUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_linesCreateOrConnectWithoutOrderInput | order_linesCreateOrConnectWithoutOrderInput[]
    createMany?: order_linesCreateManyOrderInputEnvelope
    connect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
  }

  export type order_linesUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<order_linesCreateWithoutOrderInput, order_linesUncheckedCreateWithoutOrderInput> | order_linesCreateWithoutOrderInput[] | order_linesUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_linesCreateOrConnectWithoutOrderInput | order_linesCreateOrConnectWithoutOrderInput[]
    createMany?: order_linesCreateManyOrderInputEnvelope
    connect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type order_linesUpdateManyWithoutOrderNestedInput = {
    create?: XOR<order_linesCreateWithoutOrderInput, order_linesUncheckedCreateWithoutOrderInput> | order_linesCreateWithoutOrderInput[] | order_linesUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_linesCreateOrConnectWithoutOrderInput | order_linesCreateOrConnectWithoutOrderInput[]
    upsert?: order_linesUpsertWithWhereUniqueWithoutOrderInput | order_linesUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: order_linesCreateManyOrderInputEnvelope
    set?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    disconnect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    delete?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    connect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    update?: order_linesUpdateWithWhereUniqueWithoutOrderInput | order_linesUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: order_linesUpdateManyWithWhereWithoutOrderInput | order_linesUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: order_linesScalarWhereInput | order_linesScalarWhereInput[]
  }

  export type order_linesUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<order_linesCreateWithoutOrderInput, order_linesUncheckedCreateWithoutOrderInput> | order_linesCreateWithoutOrderInput[] | order_linesUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_linesCreateOrConnectWithoutOrderInput | order_linesCreateOrConnectWithoutOrderInput[]
    upsert?: order_linesUpsertWithWhereUniqueWithoutOrderInput | order_linesUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: order_linesCreateManyOrderInputEnvelope
    set?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    disconnect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    delete?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    connect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    update?: order_linesUpdateWithWhereUniqueWithoutOrderInput | order_linesUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: order_linesUpdateManyWithWhereWithoutOrderInput | order_linesUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: order_linesScalarWhereInput | order_linesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSocial_profilesInput = {
    create?: XOR<UserCreateWithoutSocial_profilesInput, UserUncheckedCreateWithoutSocial_profilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSocial_profilesInput
    connect?: UserWhereUniqueInput
  }

  export type Enumsocial_platformFieldUpdateOperationsInput = {
    set?: $Enums.social_platform
  }

  export type UserUpdateOneRequiredWithoutSocial_profilesNestedInput = {
    create?: XOR<UserCreateWithoutSocial_profilesInput, UserUncheckedCreateWithoutSocial_profilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSocial_profilesInput
    upsert?: UserUpsertWithoutSocial_profilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSocial_profilesInput, UserUpdateWithoutSocial_profilesInput>, UserUncheckedUpdateWithoutSocial_profilesInput>
  }

  export type UserCreateNestedOneWithoutCredentialsInput = {
    create?: XOR<UserCreateWithoutCredentialsInput, UserUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCredentialsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumproviderFieldUpdateOperationsInput = {
    set?: $Enums.provider
  }

  export type Enumhash_methodFieldUpdateOperationsInput = {
    set?: $Enums.hash_method
  }

  export type UserUpdateOneRequiredWithoutCredentialsNestedInput = {
    create?: XOR<UserCreateWithoutCredentialsInput, UserUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCredentialsInput
    upsert?: UserUpsertWithoutCredentialsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCredentialsInput, UserUpdateWithoutCredentialsInput>, UserUncheckedUpdateWithoutCredentialsInput>
  }

  export type cartsCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<cartsCreateWithoutCart_itemsInput, cartsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: cartsCreateOrConnectWithoutCart_itemsInput
    connect?: cartsWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<productsCreateWithoutCart_itemsInput, productsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutCart_itemsInput
    connect?: productsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<UserCreateWithoutCart_itemsInput, UserUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCart_itemsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type cartsUpdateOneRequiredWithoutCart_itemsNestedInput = {
    create?: XOR<cartsCreateWithoutCart_itemsInput, cartsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: cartsCreateOrConnectWithoutCart_itemsInput
    upsert?: cartsUpsertWithoutCart_itemsInput
    connect?: cartsWhereUniqueInput
    update?: XOR<XOR<cartsUpdateToOneWithWhereWithoutCart_itemsInput, cartsUpdateWithoutCart_itemsInput>, cartsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type productsUpdateOneRequiredWithoutCart_itemsNestedInput = {
    create?: XOR<productsCreateWithoutCart_itemsInput, productsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutCart_itemsInput
    upsert?: productsUpsertWithoutCart_itemsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutCart_itemsInput, productsUpdateWithoutCart_itemsInput>, productsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type UserUpdateOneWithoutCart_itemsNestedInput = {
    create?: XOR<UserCreateWithoutCart_itemsInput, UserUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCart_itemsInput
    upsert?: UserUpsertWithoutCart_itemsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCart_itemsInput, UserUpdateWithoutCart_itemsInput>, UserUncheckedUpdateWithoutCart_itemsInput>
  }

  export type cart_itemsCreateNestedManyWithoutProductInput = {
    create?: XOR<cart_itemsCreateWithoutProductInput, cart_itemsUncheckedCreateWithoutProductInput> | cart_itemsCreateWithoutProductInput[] | cart_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutProductInput | cart_itemsCreateOrConnectWithoutProductInput[]
    createMany?: cart_itemsCreateManyProductInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type order_linesCreateNestedManyWithoutProductInput = {
    create?: XOR<order_linesCreateWithoutProductInput, order_linesUncheckedCreateWithoutProductInput> | order_linesCreateWithoutProductInput[] | order_linesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_linesCreateOrConnectWithoutProductInput | order_linesCreateOrConnectWithoutProductInput[]
    createMany?: order_linesCreateManyProductInputEnvelope
    connect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
  }

  export type cart_itemsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<cart_itemsCreateWithoutProductInput, cart_itemsUncheckedCreateWithoutProductInput> | cart_itemsCreateWithoutProductInput[] | cart_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutProductInput | cart_itemsCreateOrConnectWithoutProductInput[]
    createMany?: cart_itemsCreateManyProductInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type order_linesUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<order_linesCreateWithoutProductInput, order_linesUncheckedCreateWithoutProductInput> | order_linesCreateWithoutProductInput[] | order_linesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_linesCreateOrConnectWithoutProductInput | order_linesCreateOrConnectWithoutProductInput[]
    createMany?: order_linesCreateManyProductInputEnvelope
    connect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
  }

  export type cart_itemsUpdateManyWithoutProductNestedInput = {
    create?: XOR<cart_itemsCreateWithoutProductInput, cart_itemsUncheckedCreateWithoutProductInput> | cart_itemsCreateWithoutProductInput[] | cart_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutProductInput | cart_itemsCreateOrConnectWithoutProductInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutProductInput | cart_itemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: cart_itemsCreateManyProductInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutProductInput | cart_itemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutProductInput | cart_itemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type order_linesUpdateManyWithoutProductNestedInput = {
    create?: XOR<order_linesCreateWithoutProductInput, order_linesUncheckedCreateWithoutProductInput> | order_linesCreateWithoutProductInput[] | order_linesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_linesCreateOrConnectWithoutProductInput | order_linesCreateOrConnectWithoutProductInput[]
    upsert?: order_linesUpsertWithWhereUniqueWithoutProductInput | order_linesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: order_linesCreateManyProductInputEnvelope
    set?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    disconnect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    delete?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    connect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    update?: order_linesUpdateWithWhereUniqueWithoutProductInput | order_linesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: order_linesUpdateManyWithWhereWithoutProductInput | order_linesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: order_linesScalarWhereInput | order_linesScalarWhereInput[]
  }

  export type cart_itemsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<cart_itemsCreateWithoutProductInput, cart_itemsUncheckedCreateWithoutProductInput> | cart_itemsCreateWithoutProductInput[] | cart_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutProductInput | cart_itemsCreateOrConnectWithoutProductInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutProductInput | cart_itemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: cart_itemsCreateManyProductInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutProductInput | cart_itemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutProductInput | cart_itemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type order_linesUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<order_linesCreateWithoutProductInput, order_linesUncheckedCreateWithoutProductInput> | order_linesCreateWithoutProductInput[] | order_linesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_linesCreateOrConnectWithoutProductInput | order_linesCreateOrConnectWithoutProductInput[]
    upsert?: order_linesUpsertWithWhereUniqueWithoutProductInput | order_linesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: order_linesCreateManyProductInputEnvelope
    set?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    disconnect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    delete?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    connect?: order_linesWhereUniqueInput | order_linesWhereUniqueInput[]
    update?: order_linesUpdateWithWhereUniqueWithoutProductInput | order_linesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: order_linesUpdateManyWithWhereWithoutProductInput | order_linesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: order_linesScalarWhereInput | order_linesScalarWhereInput[]
  }

  export type ordersCreateNestedOneWithoutOrder_linesInput = {
    create?: XOR<ordersCreateWithoutOrder_linesInput, ordersUncheckedCreateWithoutOrder_linesInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_linesInput
    connect?: ordersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutOrder_linesInput = {
    create?: XOR<productsCreateWithoutOrder_linesInput, productsUncheckedCreateWithoutOrder_linesInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_linesInput
    connect?: productsWhereUniqueInput
  }

  export type ordersUpdateOneRequiredWithoutOrder_linesNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_linesInput, ordersUncheckedCreateWithoutOrder_linesInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_linesInput
    upsert?: ordersUpsertWithoutOrder_linesInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrder_linesInput, ordersUpdateWithoutOrder_linesInput>, ordersUncheckedUpdateWithoutOrder_linesInput>
  }

  export type productsUpdateOneRequiredWithoutOrder_linesNestedInput = {
    create?: XOR<productsCreateWithoutOrder_linesInput, productsUncheckedCreateWithoutOrder_linesInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_linesInput
    upsert?: productsUpsertWithoutOrder_linesInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutOrder_linesInput, productsUpdateWithoutOrder_linesInput>, productsUncheckedUpdateWithoutOrder_linesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumLocaleFilter<$PrismaModel = never> = {
    equals?: $Enums.Locale | EnumLocaleFieldRefInput<$PrismaModel>
    in?: $Enums.Locale[] | ListEnumLocaleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Locale[] | ListEnumLocaleFieldRefInput<$PrismaModel>
    not?: NestedEnumLocaleFilter<$PrismaModel> | $Enums.Locale
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumLocaleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Locale | EnumLocaleFieldRefInput<$PrismaModel>
    in?: $Enums.Locale[] | ListEnumLocaleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Locale[] | ListEnumLocaleFieldRefInput<$PrismaModel>
    not?: NestedEnumLocaleWithAggregatesFilter<$PrismaModel> | $Enums.Locale
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocaleFilter<$PrismaModel>
    _max?: NestedEnumLocaleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumsocial_platformFilter<$PrismaModel = never> = {
    equals?: $Enums.social_platform | Enumsocial_platformFieldRefInput<$PrismaModel>
    in?: $Enums.social_platform[] | ListEnumsocial_platformFieldRefInput<$PrismaModel>
    notIn?: $Enums.social_platform[] | ListEnumsocial_platformFieldRefInput<$PrismaModel>
    not?: NestedEnumsocial_platformFilter<$PrismaModel> | $Enums.social_platform
  }

  export type NestedEnumsocial_platformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.social_platform | Enumsocial_platformFieldRefInput<$PrismaModel>
    in?: $Enums.social_platform[] | ListEnumsocial_platformFieldRefInput<$PrismaModel>
    notIn?: $Enums.social_platform[] | ListEnumsocial_platformFieldRefInput<$PrismaModel>
    not?: NestedEnumsocial_platformWithAggregatesFilter<$PrismaModel> | $Enums.social_platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsocial_platformFilter<$PrismaModel>
    _max?: NestedEnumsocial_platformFilter<$PrismaModel>
  }

  export type NestedEnumproviderFilter<$PrismaModel = never> = {
    equals?: $Enums.provider | EnumproviderFieldRefInput<$PrismaModel>
    in?: $Enums.provider[] | ListEnumproviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.provider[] | ListEnumproviderFieldRefInput<$PrismaModel>
    not?: NestedEnumproviderFilter<$PrismaModel> | $Enums.provider
  }

  export type NestedEnumhash_methodFilter<$PrismaModel = never> = {
    equals?: $Enums.hash_method | Enumhash_methodFieldRefInput<$PrismaModel>
    in?: $Enums.hash_method[] | ListEnumhash_methodFieldRefInput<$PrismaModel>
    notIn?: $Enums.hash_method[] | ListEnumhash_methodFieldRefInput<$PrismaModel>
    not?: NestedEnumhash_methodFilter<$PrismaModel> | $Enums.hash_method
  }

  export type NestedEnumproviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.provider | EnumproviderFieldRefInput<$PrismaModel>
    in?: $Enums.provider[] | ListEnumproviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.provider[] | ListEnumproviderFieldRefInput<$PrismaModel>
    not?: NestedEnumproviderWithAggregatesFilter<$PrismaModel> | $Enums.provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumproviderFilter<$PrismaModel>
    _max?: NestedEnumproviderFilter<$PrismaModel>
  }

  export type NestedEnumhash_methodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hash_method | Enumhash_methodFieldRefInput<$PrismaModel>
    in?: $Enums.hash_method[] | ListEnumhash_methodFieldRefInput<$PrismaModel>
    notIn?: $Enums.hash_method[] | ListEnumhash_methodFieldRefInput<$PrismaModel>
    not?: NestedEnumhash_methodWithAggregatesFilter<$PrismaModel> | $Enums.hash_method
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhash_methodFilter<$PrismaModel>
    _max?: NestedEnumhash_methodFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type cartsCreateWithoutCreatedInput = {
    id?: string
    status: $Enums.Status
    created_at: Date | string
    updated_at: Date | string
    cart_items?: cart_itemsCreateNestedManyWithoutCartInput
  }

  export type cartsUncheckedCreateWithoutCreatedInput = {
    id?: string
    status: $Enums.Status
    created_at: Date | string
    updated_at: Date | string
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutCartInput
  }

  export type cartsCreateOrConnectWithoutCreatedInput = {
    where: cartsWhereUniqueInput
    create: XOR<cartsCreateWithoutCreatedInput, cartsUncheckedCreateWithoutCreatedInput>
  }

  export type cartsCreateManyCreatedInputEnvelope = {
    data: cartsCreateManyCreatedInput | cartsCreateManyCreatedInput[]
    skipDuplicates?: boolean
  }

  export type ordersCreateWithoutUserInput = {
    id?: string
    created_at: Date | string
    order_lines?: order_linesCreateNestedManyWithoutOrderInput
  }

  export type ordersUncheckedCreateWithoutUserInput = {
    id?: string
    created_at: Date | string
    order_lines?: order_linesUncheckedCreateNestedManyWithoutOrderInput
  }

  export type ordersCreateOrConnectWithoutUserInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUserInput, ordersUncheckedCreateWithoutUserInput>
  }

  export type ordersCreateManyUserInputEnvelope = {
    data: ordersCreateManyUserInput | ordersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type social_profilesCreateWithoutUserInput = {
    platform: $Enums.social_platform
    platform_user: string
    created_at: Date | string
  }

  export type social_profilesUncheckedCreateWithoutUserInput = {
    platform: $Enums.social_platform
    platform_user: string
    created_at: Date | string
  }

  export type social_profilesCreateOrConnectWithoutUserInput = {
    where: social_profilesWhereUniqueInput
    create: XOR<social_profilesCreateWithoutUserInput, social_profilesUncheckedCreateWithoutUserInput>
  }

  export type social_profilesCreateManyUserInputEnvelope = {
    data: social_profilesCreateManyUserInput | social_profilesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type credentialsCreateWithoutUserInput = {
    provider_id: $Enums.provider
    provider_key: string
    hasher: $Enums.hash_method
    password_hash: string
    password_salt: string
  }

  export type credentialsUncheckedCreateWithoutUserInput = {
    provider_id: $Enums.provider
    provider_key: string
    hasher: $Enums.hash_method
    password_hash: string
    password_salt: string
  }

  export type credentialsCreateOrConnectWithoutUserInput = {
    where: credentialsWhereUniqueInput
    create: XOR<credentialsCreateWithoutUserInput, credentialsUncheckedCreateWithoutUserInput>
  }

  export type credentialsCreateManyUserInputEnvelope = {
    data: credentialsCreateManyUserInput | credentialsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type cart_itemsCreateWithoutUserInput = {
    price: number
    quantity: number
    created_at: Date | string
    cart: cartsCreateNestedOneWithoutCart_itemsInput
    product: productsCreateNestedOneWithoutCart_itemsInput
  }

  export type cart_itemsUncheckedCreateWithoutUserInput = {
    cart_id: string
    product_id: string
    price: number
    quantity: number
    created_at: Date | string
  }

  export type cart_itemsCreateOrConnectWithoutUserInput = {
    where: cart_itemsWhereUniqueInput
    create: XOR<cart_itemsCreateWithoutUserInput, cart_itemsUncheckedCreateWithoutUserInput>
  }

  export type cart_itemsCreateManyUserInputEnvelope = {
    data: cart_itemsCreateManyUserInput | cart_itemsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type cartsUpsertWithWhereUniqueWithoutCreatedInput = {
    where: cartsWhereUniqueInput
    update: XOR<cartsUpdateWithoutCreatedInput, cartsUncheckedUpdateWithoutCreatedInput>
    create: XOR<cartsCreateWithoutCreatedInput, cartsUncheckedCreateWithoutCreatedInput>
  }

  export type cartsUpdateWithWhereUniqueWithoutCreatedInput = {
    where: cartsWhereUniqueInput
    data: XOR<cartsUpdateWithoutCreatedInput, cartsUncheckedUpdateWithoutCreatedInput>
  }

  export type cartsUpdateManyWithWhereWithoutCreatedInput = {
    where: cartsScalarWhereInput
    data: XOR<cartsUpdateManyMutationInput, cartsUncheckedUpdateManyWithoutCreatedInput>
  }

  export type cartsScalarWhereInput = {
    AND?: cartsScalarWhereInput | cartsScalarWhereInput[]
    OR?: cartsScalarWhereInput[]
    NOT?: cartsScalarWhereInput | cartsScalarWhereInput[]
    id?: UuidFilter<"carts"> | string
    created_by?: StringFilter<"carts"> | string
    status?: EnumStatusFilter<"carts"> | $Enums.Status
    created_at?: DateTimeFilter<"carts"> | Date | string
    updated_at?: DateTimeFilter<"carts"> | Date | string
  }

  export type ordersUpsertWithWhereUniqueWithoutUserInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUserInput, ordersUncheckedUpdateWithoutUserInput>
    create: XOR<ordersCreateWithoutUserInput, ordersUncheckedCreateWithoutUserInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUserInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUserInput, ordersUncheckedUpdateWithoutUserInput>
  }

  export type ordersUpdateManyWithWhereWithoutUserInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutUserInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    id?: StringFilter<"orders"> | string
    user_id?: StringFilter<"orders"> | string
    created_at?: DateTimeFilter<"orders"> | Date | string
  }

  export type social_profilesUpsertWithWhereUniqueWithoutUserInput = {
    where: social_profilesWhereUniqueInput
    update: XOR<social_profilesUpdateWithoutUserInput, social_profilesUncheckedUpdateWithoutUserInput>
    create: XOR<social_profilesCreateWithoutUserInput, social_profilesUncheckedCreateWithoutUserInput>
  }

  export type social_profilesUpdateWithWhereUniqueWithoutUserInput = {
    where: social_profilesWhereUniqueInput
    data: XOR<social_profilesUpdateWithoutUserInput, social_profilesUncheckedUpdateWithoutUserInput>
  }

  export type social_profilesUpdateManyWithWhereWithoutUserInput = {
    where: social_profilesScalarWhereInput
    data: XOR<social_profilesUpdateManyMutationInput, social_profilesUncheckedUpdateManyWithoutUserInput>
  }

  export type social_profilesScalarWhereInput = {
    AND?: social_profilesScalarWhereInput | social_profilesScalarWhereInput[]
    OR?: social_profilesScalarWhereInput[]
    NOT?: social_profilesScalarWhereInput | social_profilesScalarWhereInput[]
    user_id?: StringFilter<"social_profiles"> | string
    platform?: Enumsocial_platformFilter<"social_profiles"> | $Enums.social_platform
    platform_user?: StringFilter<"social_profiles"> | string
    created_at?: DateTimeFilter<"social_profiles"> | Date | string
  }

  export type credentialsUpsertWithWhereUniqueWithoutUserInput = {
    where: credentialsWhereUniqueInput
    update: XOR<credentialsUpdateWithoutUserInput, credentialsUncheckedUpdateWithoutUserInput>
    create: XOR<credentialsCreateWithoutUserInput, credentialsUncheckedCreateWithoutUserInput>
  }

  export type credentialsUpdateWithWhereUniqueWithoutUserInput = {
    where: credentialsWhereUniqueInput
    data: XOR<credentialsUpdateWithoutUserInput, credentialsUncheckedUpdateWithoutUserInput>
  }

  export type credentialsUpdateManyWithWhereWithoutUserInput = {
    where: credentialsScalarWhereInput
    data: XOR<credentialsUpdateManyMutationInput, credentialsUncheckedUpdateManyWithoutUserInput>
  }

  export type credentialsScalarWhereInput = {
    AND?: credentialsScalarWhereInput | credentialsScalarWhereInput[]
    OR?: credentialsScalarWhereInput[]
    NOT?: credentialsScalarWhereInput | credentialsScalarWhereInput[]
    provider_id?: EnumproviderFilter<"credentials"> | $Enums.provider
    provider_key?: StringFilter<"credentials"> | string
    user_id?: StringFilter<"credentials"> | string
    hasher?: Enumhash_methodFilter<"credentials"> | $Enums.hash_method
    password_hash?: StringFilter<"credentials"> | string
    password_salt?: StringFilter<"credentials"> | string
  }

  export type cart_itemsUpsertWithWhereUniqueWithoutUserInput = {
    where: cart_itemsWhereUniqueInput
    update: XOR<cart_itemsUpdateWithoutUserInput, cart_itemsUncheckedUpdateWithoutUserInput>
    create: XOR<cart_itemsCreateWithoutUserInput, cart_itemsUncheckedCreateWithoutUserInput>
  }

  export type cart_itemsUpdateWithWhereUniqueWithoutUserInput = {
    where: cart_itemsWhereUniqueInput
    data: XOR<cart_itemsUpdateWithoutUserInput, cart_itemsUncheckedUpdateWithoutUserInput>
  }

  export type cart_itemsUpdateManyWithWhereWithoutUserInput = {
    where: cart_itemsScalarWhereInput
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyWithoutUserInput>
  }

  export type cart_itemsScalarWhereInput = {
    AND?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
    OR?: cart_itemsScalarWhereInput[]
    NOT?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
    cart_id?: UuidFilter<"cart_items"> | string
    product_id?: UuidFilter<"cart_items"> | string
    price?: FloatFilter<"cart_items"> | number
    quantity?: IntFilter<"cart_items"> | number
    created_at?: DateTimeFilter<"cart_items"> | Date | string
    userId?: StringNullableFilter<"cart_items"> | string | null
  }

  export type UserCreateWithoutCartsInput = {
    id?: string
    slug: string
    email: string
    phone: string
    role: $Enums.UserRole
    name: string
    avatar: string
    locale: $Enums.Locale
    created_at?: Date | string
    updated_at?: Date | string
    last_login?: Date | string | null
    email_validated?: Date | string | null
    phone_validated?: Date | string | null
    bio?: string | null
    company?: string | null
    orders?: ordersCreateNestedManyWithoutUserInput
    social_profiles?: social_profilesCreateNestedManyWithoutUserInput
    credentials?: credentialsCreateNestedManyWithoutUserInput
    cart_items?: cart_itemsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCartsInput = {
    id?: string
    slug: string
    email: string
    phone: string
    role: $Enums.UserRole
    name: string
    avatar: string
    locale: $Enums.Locale
    created_at?: Date | string
    updated_at?: Date | string
    last_login?: Date | string | null
    email_validated?: Date | string | null
    phone_validated?: Date | string | null
    bio?: string | null
    company?: string | null
    orders?: ordersUncheckedCreateNestedManyWithoutUserInput
    social_profiles?: social_profilesUncheckedCreateNestedManyWithoutUserInput
    credentials?: credentialsUncheckedCreateNestedManyWithoutUserInput
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCartsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
  }

  export type cart_itemsCreateWithoutCartInput = {
    price: number
    quantity: number
    created_at: Date | string
    product: productsCreateNestedOneWithoutCart_itemsInput
    User?: UserCreateNestedOneWithoutCart_itemsInput
  }

  export type cart_itemsUncheckedCreateWithoutCartInput = {
    product_id: string
    price: number
    quantity: number
    created_at: Date | string
    userId?: string | null
  }

  export type cart_itemsCreateOrConnectWithoutCartInput = {
    where: cart_itemsWhereUniqueInput
    create: XOR<cart_itemsCreateWithoutCartInput, cart_itemsUncheckedCreateWithoutCartInput>
  }

  export type cart_itemsCreateManyCartInputEnvelope = {
    data: cart_itemsCreateManyCartInput | cart_itemsCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCartsInput = {
    update: XOR<UserUpdateWithoutCartsInput, UserUncheckedUpdateWithoutCartsInput>
    create: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartsInput, UserUncheckedUpdateWithoutCartsInput>
  }

  export type UserUpdateWithoutCartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUpdateManyWithoutUserNestedInput
    social_profiles?: social_profilesUpdateManyWithoutUserNestedInput
    credentials?: credentialsUpdateManyWithoutUserNestedInput
    cart_items?: cart_itemsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUncheckedUpdateManyWithoutUserNestedInput
    social_profiles?: social_profilesUncheckedUpdateManyWithoutUserNestedInput
    credentials?: credentialsUncheckedUpdateManyWithoutUserNestedInput
    cart_items?: cart_itemsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type cart_itemsUpsertWithWhereUniqueWithoutCartInput = {
    where: cart_itemsWhereUniqueInput
    update: XOR<cart_itemsUpdateWithoutCartInput, cart_itemsUncheckedUpdateWithoutCartInput>
    create: XOR<cart_itemsCreateWithoutCartInput, cart_itemsUncheckedCreateWithoutCartInput>
  }

  export type cart_itemsUpdateWithWhereUniqueWithoutCartInput = {
    where: cart_itemsWhereUniqueInput
    data: XOR<cart_itemsUpdateWithoutCartInput, cart_itemsUncheckedUpdateWithoutCartInput>
  }

  export type cart_itemsUpdateManyWithWhereWithoutCartInput = {
    where: cart_itemsScalarWhereInput
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyWithoutCartInput>
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    slug: string
    email: string
    phone: string
    role: $Enums.UserRole
    name: string
    avatar: string
    locale: $Enums.Locale
    created_at?: Date | string
    updated_at?: Date | string
    last_login?: Date | string | null
    email_validated?: Date | string | null
    phone_validated?: Date | string | null
    bio?: string | null
    company?: string | null
    carts?: cartsCreateNestedManyWithoutCreatedInput
    social_profiles?: social_profilesCreateNestedManyWithoutUserInput
    credentials?: credentialsCreateNestedManyWithoutUserInput
    cart_items?: cart_itemsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    slug: string
    email: string
    phone: string
    role: $Enums.UserRole
    name: string
    avatar: string
    locale: $Enums.Locale
    created_at?: Date | string
    updated_at?: Date | string
    last_login?: Date | string | null
    email_validated?: Date | string | null
    phone_validated?: Date | string | null
    bio?: string | null
    company?: string | null
    carts?: cartsUncheckedCreateNestedManyWithoutCreatedInput
    social_profiles?: social_profilesUncheckedCreateNestedManyWithoutUserInput
    credentials?: credentialsUncheckedCreateNestedManyWithoutUserInput
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type order_linesCreateWithoutOrderInput = {
    id?: string
    price: number
    quantity: number
    product: productsCreateNestedOneWithoutOrder_linesInput
  }

  export type order_linesUncheckedCreateWithoutOrderInput = {
    id?: string
    product_id: string
    price: number
    quantity: number
  }

  export type order_linesCreateOrConnectWithoutOrderInput = {
    where: order_linesWhereUniqueInput
    create: XOR<order_linesCreateWithoutOrderInput, order_linesUncheckedCreateWithoutOrderInput>
  }

  export type order_linesCreateManyOrderInputEnvelope = {
    data: order_linesCreateManyOrderInput | order_linesCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartsUpdateManyWithoutCreatedNestedInput
    social_profiles?: social_profilesUpdateManyWithoutUserNestedInput
    credentials?: credentialsUpdateManyWithoutUserNestedInput
    cart_items?: cart_itemsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartsUncheckedUpdateManyWithoutCreatedNestedInput
    social_profiles?: social_profilesUncheckedUpdateManyWithoutUserNestedInput
    credentials?: credentialsUncheckedUpdateManyWithoutUserNestedInput
    cart_items?: cart_itemsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type order_linesUpsertWithWhereUniqueWithoutOrderInput = {
    where: order_linesWhereUniqueInput
    update: XOR<order_linesUpdateWithoutOrderInput, order_linesUncheckedUpdateWithoutOrderInput>
    create: XOR<order_linesCreateWithoutOrderInput, order_linesUncheckedCreateWithoutOrderInput>
  }

  export type order_linesUpdateWithWhereUniqueWithoutOrderInput = {
    where: order_linesWhereUniqueInput
    data: XOR<order_linesUpdateWithoutOrderInput, order_linesUncheckedUpdateWithoutOrderInput>
  }

  export type order_linesUpdateManyWithWhereWithoutOrderInput = {
    where: order_linesScalarWhereInput
    data: XOR<order_linesUpdateManyMutationInput, order_linesUncheckedUpdateManyWithoutOrderInput>
  }

  export type order_linesScalarWhereInput = {
    AND?: order_linesScalarWhereInput | order_linesScalarWhereInput[]
    OR?: order_linesScalarWhereInput[]
    NOT?: order_linesScalarWhereInput | order_linesScalarWhereInput[]
    id?: StringFilter<"order_lines"> | string
    order_id?: UuidFilter<"order_lines"> | string
    product_id?: UuidFilter<"order_lines"> | string
    price?: FloatFilter<"order_lines"> | number
    quantity?: IntFilter<"order_lines"> | number
  }

  export type UserCreateWithoutSocial_profilesInput = {
    id?: string
    slug: string
    email: string
    phone: string
    role: $Enums.UserRole
    name: string
    avatar: string
    locale: $Enums.Locale
    created_at?: Date | string
    updated_at?: Date | string
    last_login?: Date | string | null
    email_validated?: Date | string | null
    phone_validated?: Date | string | null
    bio?: string | null
    company?: string | null
    carts?: cartsCreateNestedManyWithoutCreatedInput
    orders?: ordersCreateNestedManyWithoutUserInput
    credentials?: credentialsCreateNestedManyWithoutUserInput
    cart_items?: cart_itemsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSocial_profilesInput = {
    id?: string
    slug: string
    email: string
    phone: string
    role: $Enums.UserRole
    name: string
    avatar: string
    locale: $Enums.Locale
    created_at?: Date | string
    updated_at?: Date | string
    last_login?: Date | string | null
    email_validated?: Date | string | null
    phone_validated?: Date | string | null
    bio?: string | null
    company?: string | null
    carts?: cartsUncheckedCreateNestedManyWithoutCreatedInput
    orders?: ordersUncheckedCreateNestedManyWithoutUserInput
    credentials?: credentialsUncheckedCreateNestedManyWithoutUserInput
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSocial_profilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSocial_profilesInput, UserUncheckedCreateWithoutSocial_profilesInput>
  }

  export type UserUpsertWithoutSocial_profilesInput = {
    update: XOR<UserUpdateWithoutSocial_profilesInput, UserUncheckedUpdateWithoutSocial_profilesInput>
    create: XOR<UserCreateWithoutSocial_profilesInput, UserUncheckedCreateWithoutSocial_profilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSocial_profilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSocial_profilesInput, UserUncheckedUpdateWithoutSocial_profilesInput>
  }

  export type UserUpdateWithoutSocial_profilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartsUpdateManyWithoutCreatedNestedInput
    orders?: ordersUpdateManyWithoutUserNestedInput
    credentials?: credentialsUpdateManyWithoutUserNestedInput
    cart_items?: cart_itemsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSocial_profilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartsUncheckedUpdateManyWithoutCreatedNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUserNestedInput
    credentials?: credentialsUncheckedUpdateManyWithoutUserNestedInput
    cart_items?: cart_itemsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCredentialsInput = {
    id?: string
    slug: string
    email: string
    phone: string
    role: $Enums.UserRole
    name: string
    avatar: string
    locale: $Enums.Locale
    created_at?: Date | string
    updated_at?: Date | string
    last_login?: Date | string | null
    email_validated?: Date | string | null
    phone_validated?: Date | string | null
    bio?: string | null
    company?: string | null
    carts?: cartsCreateNestedManyWithoutCreatedInput
    orders?: ordersCreateNestedManyWithoutUserInput
    social_profiles?: social_profilesCreateNestedManyWithoutUserInput
    cart_items?: cart_itemsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCredentialsInput = {
    id?: string
    slug: string
    email: string
    phone: string
    role: $Enums.UserRole
    name: string
    avatar: string
    locale: $Enums.Locale
    created_at?: Date | string
    updated_at?: Date | string
    last_login?: Date | string | null
    email_validated?: Date | string | null
    phone_validated?: Date | string | null
    bio?: string | null
    company?: string | null
    carts?: cartsUncheckedCreateNestedManyWithoutCreatedInput
    orders?: ordersUncheckedCreateNestedManyWithoutUserInput
    social_profiles?: social_profilesUncheckedCreateNestedManyWithoutUserInput
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCredentialsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCredentialsInput, UserUncheckedCreateWithoutCredentialsInput>
  }

  export type UserUpsertWithoutCredentialsInput = {
    update: XOR<UserUpdateWithoutCredentialsInput, UserUncheckedUpdateWithoutCredentialsInput>
    create: XOR<UserCreateWithoutCredentialsInput, UserUncheckedCreateWithoutCredentialsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCredentialsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCredentialsInput, UserUncheckedUpdateWithoutCredentialsInput>
  }

  export type UserUpdateWithoutCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartsUpdateManyWithoutCreatedNestedInput
    orders?: ordersUpdateManyWithoutUserNestedInput
    social_profiles?: social_profilesUpdateManyWithoutUserNestedInput
    cart_items?: cart_itemsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartsUncheckedUpdateManyWithoutCreatedNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUserNestedInput
    social_profiles?: social_profilesUncheckedUpdateManyWithoutUserNestedInput
    cart_items?: cart_itemsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type cartsCreateWithoutCart_itemsInput = {
    id?: string
    status: $Enums.Status
    created_at: Date | string
    updated_at: Date | string
    created: UserCreateNestedOneWithoutCartsInput
  }

  export type cartsUncheckedCreateWithoutCart_itemsInput = {
    id?: string
    created_by: string
    status: $Enums.Status
    created_at: Date | string
    updated_at: Date | string
  }

  export type cartsCreateOrConnectWithoutCart_itemsInput = {
    where: cartsWhereUniqueInput
    create: XOR<cartsCreateWithoutCart_itemsInput, cartsUncheckedCreateWithoutCart_itemsInput>
  }

  export type productsCreateWithoutCart_itemsInput = {
    id?: string
    order_lines?: order_linesCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateWithoutCart_itemsInput = {
    id?: string
    order_lines?: order_linesUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsCreateOrConnectWithoutCart_itemsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCart_itemsInput, productsUncheckedCreateWithoutCart_itemsInput>
  }

  export type UserCreateWithoutCart_itemsInput = {
    id?: string
    slug: string
    email: string
    phone: string
    role: $Enums.UserRole
    name: string
    avatar: string
    locale: $Enums.Locale
    created_at?: Date | string
    updated_at?: Date | string
    last_login?: Date | string | null
    email_validated?: Date | string | null
    phone_validated?: Date | string | null
    bio?: string | null
    company?: string | null
    carts?: cartsCreateNestedManyWithoutCreatedInput
    orders?: ordersCreateNestedManyWithoutUserInput
    social_profiles?: social_profilesCreateNestedManyWithoutUserInput
    credentials?: credentialsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCart_itemsInput = {
    id?: string
    slug: string
    email: string
    phone: string
    role: $Enums.UserRole
    name: string
    avatar: string
    locale: $Enums.Locale
    created_at?: Date | string
    updated_at?: Date | string
    last_login?: Date | string | null
    email_validated?: Date | string | null
    phone_validated?: Date | string | null
    bio?: string | null
    company?: string | null
    carts?: cartsUncheckedCreateNestedManyWithoutCreatedInput
    orders?: ordersUncheckedCreateNestedManyWithoutUserInput
    social_profiles?: social_profilesUncheckedCreateNestedManyWithoutUserInput
    credentials?: credentialsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCart_itemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCart_itemsInput, UserUncheckedCreateWithoutCart_itemsInput>
  }

  export type cartsUpsertWithoutCart_itemsInput = {
    update: XOR<cartsUpdateWithoutCart_itemsInput, cartsUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<cartsCreateWithoutCart_itemsInput, cartsUncheckedCreateWithoutCart_itemsInput>
    where?: cartsWhereInput
  }

  export type cartsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: cartsWhereInput
    data: XOR<cartsUpdateWithoutCart_itemsInput, cartsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type cartsUpdateWithoutCart_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: UserUpdateOneRequiredWithoutCartsNestedInput
  }

  export type cartsUncheckedUpdateWithoutCart_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUpsertWithoutCart_itemsInput = {
    update: XOR<productsUpdateWithoutCart_itemsInput, productsUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<productsCreateWithoutCart_itemsInput, productsUncheckedCreateWithoutCart_itemsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutCart_itemsInput, productsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type productsUpdateWithoutCart_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_lines?: order_linesUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateWithoutCart_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_lines?: order_linesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutCart_itemsInput = {
    update: XOR<UserUpdateWithoutCart_itemsInput, UserUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<UserCreateWithoutCart_itemsInput, UserUncheckedCreateWithoutCart_itemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCart_itemsInput, UserUncheckedUpdateWithoutCart_itemsInput>
  }

  export type UserUpdateWithoutCart_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartsUpdateManyWithoutCreatedNestedInput
    orders?: ordersUpdateManyWithoutUserNestedInput
    social_profiles?: social_profilesUpdateManyWithoutUserNestedInput
    credentials?: credentialsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCart_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    locale?: EnumLocaleFieldUpdateOperationsInput | $Enums.Locale
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone_validated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartsUncheckedUpdateManyWithoutCreatedNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUserNestedInput
    social_profiles?: social_profilesUncheckedUpdateManyWithoutUserNestedInput
    credentials?: credentialsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type cart_itemsCreateWithoutProductInput = {
    price: number
    quantity: number
    created_at: Date | string
    cart: cartsCreateNestedOneWithoutCart_itemsInput
    User?: UserCreateNestedOneWithoutCart_itemsInput
  }

  export type cart_itemsUncheckedCreateWithoutProductInput = {
    cart_id: string
    price: number
    quantity: number
    created_at: Date | string
    userId?: string | null
  }

  export type cart_itemsCreateOrConnectWithoutProductInput = {
    where: cart_itemsWhereUniqueInput
    create: XOR<cart_itemsCreateWithoutProductInput, cart_itemsUncheckedCreateWithoutProductInput>
  }

  export type cart_itemsCreateManyProductInputEnvelope = {
    data: cart_itemsCreateManyProductInput | cart_itemsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type order_linesCreateWithoutProductInput = {
    id?: string
    price: number
    quantity: number
    order: ordersCreateNestedOneWithoutOrder_linesInput
  }

  export type order_linesUncheckedCreateWithoutProductInput = {
    id?: string
    order_id: string
    price: number
    quantity: number
  }

  export type order_linesCreateOrConnectWithoutProductInput = {
    where: order_linesWhereUniqueInput
    create: XOR<order_linesCreateWithoutProductInput, order_linesUncheckedCreateWithoutProductInput>
  }

  export type order_linesCreateManyProductInputEnvelope = {
    data: order_linesCreateManyProductInput | order_linesCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type cart_itemsUpsertWithWhereUniqueWithoutProductInput = {
    where: cart_itemsWhereUniqueInput
    update: XOR<cart_itemsUpdateWithoutProductInput, cart_itemsUncheckedUpdateWithoutProductInput>
    create: XOR<cart_itemsCreateWithoutProductInput, cart_itemsUncheckedCreateWithoutProductInput>
  }

  export type cart_itemsUpdateWithWhereUniqueWithoutProductInput = {
    where: cart_itemsWhereUniqueInput
    data: XOR<cart_itemsUpdateWithoutProductInput, cart_itemsUncheckedUpdateWithoutProductInput>
  }

  export type cart_itemsUpdateManyWithWhereWithoutProductInput = {
    where: cart_itemsScalarWhereInput
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyWithoutProductInput>
  }

  export type order_linesUpsertWithWhereUniqueWithoutProductInput = {
    where: order_linesWhereUniqueInput
    update: XOR<order_linesUpdateWithoutProductInput, order_linesUncheckedUpdateWithoutProductInput>
    create: XOR<order_linesCreateWithoutProductInput, order_linesUncheckedCreateWithoutProductInput>
  }

  export type order_linesUpdateWithWhereUniqueWithoutProductInput = {
    where: order_linesWhereUniqueInput
    data: XOR<order_linesUpdateWithoutProductInput, order_linesUncheckedUpdateWithoutProductInput>
  }

  export type order_linesUpdateManyWithWhereWithoutProductInput = {
    where: order_linesScalarWhereInput
    data: XOR<order_linesUpdateManyMutationInput, order_linesUncheckedUpdateManyWithoutProductInput>
  }

  export type ordersCreateWithoutOrder_linesInput = {
    id?: string
    created_at: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutOrder_linesInput = {
    id?: string
    user_id: string
    created_at: Date | string
  }

  export type ordersCreateOrConnectWithoutOrder_linesInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_linesInput, ordersUncheckedCreateWithoutOrder_linesInput>
  }

  export type productsCreateWithoutOrder_linesInput = {
    id?: string
    cart_items?: cart_itemsCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateWithoutOrder_linesInput = {
    id?: string
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsCreateOrConnectWithoutOrder_linesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutOrder_linesInput, productsUncheckedCreateWithoutOrder_linesInput>
  }

  export type ordersUpsertWithoutOrder_linesInput = {
    update: XOR<ordersUpdateWithoutOrder_linesInput, ordersUncheckedUpdateWithoutOrder_linesInput>
    create: XOR<ordersCreateWithoutOrder_linesInput, ordersUncheckedCreateWithoutOrder_linesInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrder_linesInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrder_linesInput, ordersUncheckedUpdateWithoutOrder_linesInput>
  }

  export type ordersUpdateWithoutOrder_linesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutOrder_linesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUpsertWithoutOrder_linesInput = {
    update: XOR<productsUpdateWithoutOrder_linesInput, productsUncheckedUpdateWithoutOrder_linesInput>
    create: XOR<productsCreateWithoutOrder_linesInput, productsUncheckedCreateWithoutOrder_linesInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutOrder_linesInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutOrder_linesInput, productsUncheckedUpdateWithoutOrder_linesInput>
  }

  export type productsUpdateWithoutOrder_linesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart_items?: cart_itemsUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateWithoutOrder_linesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart_items?: cart_itemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type cartsCreateManyCreatedInput = {
    id?: string
    status: $Enums.Status
    created_at: Date | string
    updated_at: Date | string
  }

  export type ordersCreateManyUserInput = {
    id?: string
    created_at: Date | string
  }

  export type social_profilesCreateManyUserInput = {
    platform: $Enums.social_platform
    platform_user: string
    created_at: Date | string
  }

  export type credentialsCreateManyUserInput = {
    provider_id: $Enums.provider
    provider_key: string
    hasher: $Enums.hash_method
    password_hash: string
    password_salt: string
  }

  export type cart_itemsCreateManyUserInput = {
    cart_id: string
    product_id: string
    price: number
    quantity: number
    created_at: Date | string
  }

  export type cartsUpdateWithoutCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: cart_itemsUpdateManyWithoutCartNestedInput
  }

  export type cartsUncheckedUpdateWithoutCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: cart_itemsUncheckedUpdateManyWithoutCartNestedInput
  }

  export type cartsUncheckedUpdateManyWithoutCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_lines?: order_linesUpdateManyWithoutOrderNestedInput
  }

  export type ordersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_lines?: order_linesUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type social_profilesUpdateWithoutUserInput = {
    platform?: Enumsocial_platformFieldUpdateOperationsInput | $Enums.social_platform
    platform_user?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type social_profilesUncheckedUpdateWithoutUserInput = {
    platform?: Enumsocial_platformFieldUpdateOperationsInput | $Enums.social_platform
    platform_user?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type social_profilesUncheckedUpdateManyWithoutUserInput = {
    platform?: Enumsocial_platformFieldUpdateOperationsInput | $Enums.social_platform
    platform_user?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type credentialsUpdateWithoutUserInput = {
    provider_id?: EnumproviderFieldUpdateOperationsInput | $Enums.provider
    provider_key?: StringFieldUpdateOperationsInput | string
    hasher?: Enumhash_methodFieldUpdateOperationsInput | $Enums.hash_method
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
  }

  export type credentialsUncheckedUpdateWithoutUserInput = {
    provider_id?: EnumproviderFieldUpdateOperationsInput | $Enums.provider
    provider_key?: StringFieldUpdateOperationsInput | string
    hasher?: Enumhash_methodFieldUpdateOperationsInput | $Enums.hash_method
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
  }

  export type credentialsUncheckedUpdateManyWithoutUserInput = {
    provider_id?: EnumproviderFieldUpdateOperationsInput | $Enums.provider
    provider_key?: StringFieldUpdateOperationsInput | string
    hasher?: Enumhash_methodFieldUpdateOperationsInput | $Enums.hash_method
    password_hash?: StringFieldUpdateOperationsInput | string
    password_salt?: StringFieldUpdateOperationsInput | string
  }

  export type cart_itemsUpdateWithoutUserInput = {
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartsUpdateOneRequiredWithoutCart_itemsNestedInput
    product?: productsUpdateOneRequiredWithoutCart_itemsNestedInput
  }

  export type cart_itemsUncheckedUpdateWithoutUserInput = {
    cart_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cart_itemsUncheckedUpdateManyWithoutUserInput = {
    cart_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cart_itemsCreateManyCartInput = {
    product_id: string
    price: number
    quantity: number
    created_at: Date | string
    userId?: string | null
  }

  export type cart_itemsUpdateWithoutCartInput = {
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productsUpdateOneRequiredWithoutCart_itemsNestedInput
    User?: UserUpdateOneWithoutCart_itemsNestedInput
  }

  export type cart_itemsUncheckedUpdateWithoutCartInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cart_itemsUncheckedUpdateManyWithoutCartInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type order_linesCreateManyOrderInput = {
    id?: string
    product_id: string
    price: number
    quantity: number
  }

  export type order_linesUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    product?: productsUpdateOneRequiredWithoutOrder_linesNestedInput
  }

  export type order_linesUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type order_linesUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type cart_itemsCreateManyProductInput = {
    cart_id: string
    price: number
    quantity: number
    created_at: Date | string
    userId?: string | null
  }

  export type order_linesCreateManyProductInput = {
    id?: string
    order_id: string
    price: number
    quantity: number
  }

  export type cart_itemsUpdateWithoutProductInput = {
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartsUpdateOneRequiredWithoutCart_itemsNestedInput
    User?: UserUpdateOneWithoutCart_itemsNestedInput
  }

  export type cart_itemsUncheckedUpdateWithoutProductInput = {
    cart_id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cart_itemsUncheckedUpdateManyWithoutProductInput = {
    cart_id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type order_linesUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    order?: ordersUpdateOneRequiredWithoutOrder_linesNestedInput
  }

  export type order_linesUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type order_linesUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}