package Kuis_Hewan;

public class Ikan extends Hewan {

    @Override
    public void makan(String nama){
        System.out.println(nama + " sedang makan.");
    }
    @Override
    public void caraBerkembangBiak(){
        System.out.println("Berkembang biak dengan cara bertelur");
    }
    @Override
    public void bergerak(int jumlahKaki){
        System.out.println("Bergerak dengan " + jumlahKaki + " kaki");
    }
    //New Method
    public void ketahanan(){
        System.out.println("Memiliki ketahanan 20 menit dibawah air");
    }

}

