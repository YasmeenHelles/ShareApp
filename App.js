import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const C = { navy: '#101D3A', muted: '#8390AD', yellow: '#FFC94D', bg: '#FFFEFA' };

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const action = name => setMessage(name + ' — أضف الخدمة المناسبة لاحقًا.');
  const social = (name, child) => <TouchableOpacity key={name} style={s.social} onPress={() => action('تسجيل ' + name)} accessibilityLabel={'تسجيل الدخول باستخدام ' + name}>{child}</TouchableOpacity>;

  return <SafeAreaView style={s.safe}><StatusBar barStyle="dark-content" backgroundColor={C.bg}/><KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}><ScrollView contentContainerStyle={s.page} keyboardShouldPersistTaps="handled">
    <View style={s.brand}><Text style={s.plane}>➤</Text><Text style={s.logo}>شير</Text><Text style={s.head}>ارفع محتواك .. وانشره في كل مكان</Text><Text style={s.sub}>صور، فيديوهات .. إلى جميع منصاتك بسهولة</Text></View>
    <View style={s.field}><Ionicons name="mail-outline" size={25} color={C.muted}/><TextInput value={email} onChangeText={setEmail} placeholder="البريد الإلكتروني" placeholderTextColor={C.muted} keyboardType="email-address" autoCapitalize="none" textAlign="right" style={s.input} accessibilityLabel="البريد الإلكتروني"/></View>
    <View style={s.field}><TouchableOpacity onPress={() => setShowPassword(v => !v)}><Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={25} color={C.muted}/></TouchableOpacity><TextInput value={password} onChangeText={setPassword} placeholder="كلمة المرور" placeholderTextColor={C.muted} secureTextEntry={!showPassword} textAlign="right" style={s.input} accessibilityLabel="كلمة المرور"/><Ionicons name="lock-closed-outline" size={25} color={C.muted}/></View>
    <TouchableOpacity style={s.forgot} onPress={() => action('استعادة كلمة المرور')}><Text style={{color:C.muted}}>نسيت كلمة المرور؟</Text></TouchableOpacity>
    <TouchableOpacity style={s.login} onPress={() => setMessage(!email.trim() || !password ? 'يرجى إدخال البريد الإلكتروني وكلمة المرور' : 'تم التحقق من الحقول. اربط الزر بخدمة تسجيل الدخول الخاصة بك.')}><Text style={s.loginText}>تسجيل الدخول</Text><Ionicons name="arrow-forward-outline" size={29} color={C.navy}/></TouchableOpacity>
    {!!message && <Text style={s.message} accessibilityLiveRegion="polite">{message}</Text>}
    <View style={s.divider}><View style={s.line}/><Text style={{color:C.muted,fontSize:20}}>أو</Text><View style={s.line}/></View>
    <View style={s.socialRow}>{social('Google',<FontAwesome name="google" size={29} color="#4285F4"/>)}{social('Apple',<Ionicons name="logo-apple" size={32} color="#000"/>)}{social('Facebook',<FontAwesome name="facebook" size={30} color="#1877F2"/>)}{social('X',<FontAwesome name="x-twitter" size={27} color="#111"/>)}</View>
    <View style={s.signup}><TouchableOpacity onPress={() => action('إنشاء حساب جديد')}><Text style={s.link}>إنشاء حساب جديد</Text></TouchableOpacity><Text style={{color:C.muted}}>ليس لديك حساب؟</Text></View>
  </ScrollView></KeyboardAvoidingView></SafeAreaView>;
}
const s = StyleSheet.create({
 safe:{flex:1,backgroundColor:C.bg},page:{flexGrow:1,justifyContent:'center',paddingHorizontal:25,paddingVertical:35},brand:{alignItems:'center',marginBottom:40},plane:{fontSize:42,color:'#F3B92F'},logo:{fontSize:64,fontWeight:'900',color:C.navy,writingDirection:'rtl'},head:{fontSize:20,fontWeight:'700',color:C.navy,textAlign:'center',marginTop:22,writingDirection:'rtl'},sub:{fontSize:16,color:C.muted,textAlign:'center',marginTop:8,writingDirection:'rtl'},field:{height:72,backgroundColor:'#fff',borderRadius:22,paddingHorizontal:18,flexDirection:'row',alignItems:'center',gap:13,marginBottom:18,elevation:2},input:{flex:1,fontSize:17,color:C.navy,writingDirection:'rtl'},forgot:{alignSelf:'flex-start',marginTop:-3,marginBottom:25},login:{height:77,borderRadius:24,backgroundColor:C.yellow,flexDirection:'row-reverse',alignItems:'center',justifyContent:'center',gap:17},loginText:{fontSize:22,fontWeight:'800',color:C.navy},message:{textAlign:'center',color:C.navy,marginTop:10,fontSize:13,writingDirection:'rtl'},divider:{flexDirection:'row',alignItems:'center',gap:14,marginTop:40,marginBottom:25},line:{height:1,backgroundColor:'#E6E3DC',flex:1},socialRow:{flexDirection:'row',justifyContent:'center',gap:12},social:{height:78,width:68,borderRadius:20,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',elevation:2},signup:{marginTop:45,flexDirection:'row-reverse',alignItems:'center',justifyContent:'center',gap:12,flexWrap:'wrap'},link:{fontSize:17,color:'#F3B92F',fontWeight:'800',writingDirection:'rtl'}
});