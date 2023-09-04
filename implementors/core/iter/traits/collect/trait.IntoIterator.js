(function() {var implementors = {
"arrow_array":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"arrow_array/array/fixed_size_binary_array/struct.FixedSizeBinaryArray.html\" title=\"struct arrow_array::array::fixed_size_binary_array::FixedSizeBinaryArray\">FixedSizeBinaryArray</a>"],["impl&lt;'a, R, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"arrow_array/array/run_array/struct.TypedRunArray.html\" title=\"struct arrow_array::array::run_array::TypedRunArray\">TypedRunArray</a>&lt;'a, R, V&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"arrow_array/types/trait.RunEndIndexType.html\" title=\"trait arrow_array::types::RunEndIndexType\">RunEndIndexType</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a V</a>: <a class=\"trait\" href=\"arrow_array/array/trait.ArrayAccessor.html\" title=\"trait arrow_array::array::ArrayAccessor\">ArrayAccessor</a>,\n    &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a V</a> as <a class=\"trait\" href=\"arrow_array/array/trait.ArrayAccessor.html\" title=\"trait arrow_array::array::ArrayAccessor\">ArrayAccessor</a>&gt;::<a class=\"associatedtype\" href=\"arrow_array/array/trait.ArrayAccessor.html#associatedtype.Item\" title=\"type arrow_array::array::ArrayAccessor::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span>"],["impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"arrow_array/array/dictionary_array/struct.TypedDictionaryArray.html\" title=\"struct arrow_array::array::dictionary_array::TypedDictionaryArray\">TypedDictionaryArray</a>&lt;'a, K, V&gt;<span class=\"where fmt-newline\">where\n    K: <a class=\"trait\" href=\"arrow_array/types/trait.ArrowDictionaryKeyType.html\" title=\"trait arrow_array::types::ArrowDictionaryKeyType\">ArrowDictionaryKeyType</a>,\n    Self: <a class=\"trait\" href=\"arrow_array/array/trait.ArrayAccessor.html\" title=\"trait arrow_array::array::ArrayAccessor\">ArrayAccessor</a>,</span>"],["impl&lt;'a, T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteArrayType.html\" title=\"trait arrow_array::types::ByteArrayType\">ByteArrayType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"arrow_array/array/byte_array/struct.GenericByteArray.html\" title=\"struct arrow_array::array::byte_array::GenericByteArray\">GenericByteArray</a>&lt;T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"arrow_array/types/trait.ArrowPrimitiveType.html\" title=\"trait arrow_array::types::ArrowPrimitiveType\">ArrowPrimitiveType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"arrow_array/array/primitive_array/struct.PrimitiveArray.html\" title=\"struct arrow_array::array::primitive_array::PrimitiveArray\">PrimitiveArray</a>&lt;T&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"arrow_array/array/boolean_array/struct.BooleanArray.html\" title=\"struct arrow_array::array::boolean_array::BooleanArray\">BooleanArray</a>"]],
"arrow_buffer":[["impl&lt;'a, T: <a class=\"trait\" href=\"arrow_buffer/native/trait.ArrowNativeType.html\" title=\"trait arrow_buffer::native::ArrowNativeType\">ArrowNativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"arrow_buffer/buffer/scalar/struct.ScalarBuffer.html\" title=\"struct arrow_buffer::buffer::scalar::ScalarBuffer\">ScalarBuffer</a>&lt;T&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"arrow_buffer/util/bit_chunk_iterator/struct.BitChunks.html\" title=\"struct arrow_buffer::util::bit_chunk_iterator::BitChunks\">BitChunks</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"arrow_buffer/buffer/boolean/struct.BooleanBuffer.html\" title=\"struct arrow_buffer::buffer::boolean::BooleanBuffer\">BooleanBuffer</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"arrow_buffer/buffer/null/struct.NullBuffer.html\" title=\"struct arrow_buffer::buffer::null::NullBuffer\">NullBuffer</a>"]],
"arrow_row":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"arrow_row/struct.Rows.html\" title=\"struct arrow_row::Rows\">Rows</a>"]],
"arrow_schema":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"arrow_schema/ffi/flags/struct.Flags.html\" title=\"struct arrow_schema::ffi::flags::Flags\">Flags</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"arrow_schema/fields/struct.Fields.html\" title=\"struct arrow_schema::fields::Fields\">Fields</a>"]],
"parquet":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"parquet/file/serialized_reader/struct.SerializedFileReader.html\" title=\"struct parquet::file::serialized_reader::SerializedFileReader\">SerializedFileReader</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/fs/struct.File.html\" title=\"struct std::fs::File\">File</a>&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()