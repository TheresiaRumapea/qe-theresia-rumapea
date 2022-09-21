package Kuis_Hewan;

public class Harimau extends Hewan {

//    @Override
//    public void makan(String nama){
//        System.out.println(nama + " sedang makan.");
//    }
    @Override
    public void caraBerkembangBiak(){
        System.out.println("Berkembang biak dengan cara melahirkan");
    }
    @Override
    public void bergerak(int jumlahKaki){
        System.out.println("Bergerak dengan " + jumlahKaki + " kaki");
    }
    //New Method
    public void kecepatan(int kecepatan){
        System.out.println("Memiliki kecepatan " + kecepatan + " km/jam");
    }

}

