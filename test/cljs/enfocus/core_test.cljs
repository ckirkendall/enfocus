(ns enfocus.core-test
  (:require [cemerick.cljs.test :as t])
  (:require-macros [cemerick.cljs.test :refer (use-fixtures deftest is)]))

(declare ^:dynamic *a* ^:dynamic *b* ^:dynamic *c* ^:dynamic *d*)

(def ^:dynamic *n* 0)

(defn fixture-a [f]
  (binding [*a* 3] (f)))

(defn fixture-b [f]
  (binding [*b* 5] (f)))

(defn fixture-c [f]
  (binding [*c* 7] (f)))

(defn fixture-d [f]
  (binding [*d* 11] (f)))

(defn inc-n-fixture [f]
  (binding [*n* (inc *n*)] (f)))

(use-fixtures :once fixture-a fixture-b)

(use-fixtures :each fixture-c fixture-d inc-n-fixture)

(deftest can-use-once-fixtures
  (is (= 3 *a*))
  (is (= 5 *b*)))

(deftest can-use-each-fixtures
  (is (= 7 *c*))
  (is (= 11 *d*)))

(deftest use-fixtures-replaces
  (is (= *n* 1)))


